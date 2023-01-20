package user

import (
	"fmt"
	"log"
	"net/mail"

	"golang.org/x/crypto/bcrypt"
	"golang.org/x/net/context"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type User struct {
	ID        int32  `gorm:"type: SERIAL PRIMARY KEY"`
	ImagePath string `gorm:"type: VARCHAR NULL"`
	FirstName string `gorm:"type: VARCHAR(50) NOT NULL"`
	LastName  string `gorm:"type: VARCHAR(50) NOT NULL"`
	Email     string `gorm:"type: VARCHAR(100) UNIQUE NOT NULL"`
	Password  string `gorm:"type: VARCHAR NOT NULL"`
	Headline  string `gorm:"type: VARCHAR(250) NOT NULL"`
}

type Server struct {
}

var dsn = "host=localhost user=username password=password dbname=userdb port=5432"
var DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

func (s *Server) SayHello(ctx context.Context, m *HelloRequest) (*HelloResponse, error) {
	log.Printf("Client has name %s", m.Name)
	return &HelloResponse{Body: fmt.Sprintf("Hello %s!", m.Name)}, nil
}

func (s *Server) Register(ctx context.Context, m *RegisterRequest) (*RegisterResponse, error) {
	var password, firstName, lastName = m.Password, m.FirstName, m.LastName

	// Verify email format
	email, err := mail.ParseAddress(m.Email)
	if err != nil {
		return nil, err
	}

	// Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	user := User{Email: email.Address, Password: string(hashedPassword), FirstName: firstName, LastName: lastName}

	result := DB.Create(&user)

	if result.Error != nil {
		return nil, result.Error
	}

	return &RegisterResponse{UserId: user.ID, Body: "Register successful."}, nil
}

func (s *Server) Login(ctx context.Context, m *LoginRequest) (*LoginResponse, error) {
	var email, password = m.Email, m.Password
	var user User

	result := DB.Select("id, password").Where("email = ?", email).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return nil, err
	}

	return &LoginResponse{UserId: user.ID, Body: "Login successful."}, nil
}

func (s *Server) Logout(ctx context.Context, m *LogoutRequest) (*LogoutResponse, error) {
	var id = m.UserId
	var user User

	result := DB.Select("id").Where("id = ?", id).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	return &LogoutResponse{UserId: user.ID, Body: "Logout Successful."}, nil
}

func (s *Server) Me(ctx context.Context, m *MeRequest) (*MeResponse, error) {
	var id = m.UserId
	var user User

	result := DB.Select("id", "email", "first_name", "last_name", "headline", "image_path").Where("id = ?", id).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	return &MeResponse{UserId: user.ID, Email: user.Email, FirstName: user.FirstName,
		LastName: user.LastName, Headline: user.Headline, ImagePath: user.ImagePath}, nil
}

package main

import (
	"log"
	"net"

	"github.com/ryowright/user/user"
	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatalf("Failed to listen on port 9000: %v", err)
	}

	user.DB.AutoMigrate(&user.User{})

	s := user.Server{}

	grpcServer := grpc.NewServer()

	user.RegisterUserServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to serve gRPC server over port 9000: %v", err)
	}
}

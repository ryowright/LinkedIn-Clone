package user

import (
	"fmt"
	"log"

	"golang.org/x/net/context"
)

type Server struct {
}

func (s *Server) SayHello(ctx context.Context, m *HelloRequest) (*HelloResponse, error) {
	log.Printf("Client has name %s", m.Name)
	return &HelloResponse{Body: fmt.Sprintf("Hello %s!", m.Name)}, nil
}

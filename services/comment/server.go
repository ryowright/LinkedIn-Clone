package main

import (
	"log"
	"net"

	"github.com/ryowright/commentservice/comment"
	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", ":9002")
	if err != nil {
		log.Fatalf("Failed to listen on port 9002: %v", err)
	}

	s := comment.Server{}

	grpcServer := grpc.NewServer()

	comment.RegisterCommentServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to serve gRPC server over port 9002: %v", err)
	}
}

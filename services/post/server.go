package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"github.com/ryowright/postservice/post"
	"google.golang.org/grpc"

	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func main() {

	// SETUP CONNECTION TO DATABASE
	var client, err = post.Client, post.Err
	if err != nil {
		panic(err)
	}

	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected and pinged.")

	// SETUP gRCP SERVER
	lis, err := net.Listen("tcp", ":9001")
	if err != nil {
		log.Fatalf("Failed to listen on port 9001: %v", err)
	}

	s := post.Server{}

	grpcServer := grpc.NewServer()

	post.RegisterPostServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to serve gRPC server over port 9001: %v", err)
	}
}

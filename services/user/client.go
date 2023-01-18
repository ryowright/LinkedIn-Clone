package main

import (
	"log"

	"github.com/ryowright/userservice/user"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

func main() {
	var conn *grpc.ClientConn
	conn, err := grpc.Dial(":9000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("could not connect: %s", err)
	}
	defer conn.Close()

	c := user.NewHelloServiceClient(conn)

	message := user.HelloRequest{
		Name: "Ryo",
	}

	response, err := c.SayHello(context.Background(), &message)
	if err != nil {
		log.Fatalf("Error when calling SayHello: %s", err)
	}

	log.Printf("Response from Server: %s", response.Body)
}

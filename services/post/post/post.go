package post

import (
	context "context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Post struct {
	PostId     primitive.ObjectID `bson:"_id"`
	UserId     int32              `bson:"user_id"`
	PostText   string             `bson:"post_text"`
	CommentIDs []string           `bson:"comments"`
	// CreatedAt time.Time
	// UpdatedAt time.Time
}

// type Comment struct {
// 	ID          string
// 	UserId      int32
// 	PostId      string
// 	CommentText string
// 	// CreatedAt   time.Time
// 	// UpdatedAt   time.Time
// }

type Server struct {
}

const uri = "mongodb://username:password@localhost:27017/?maxPoolSize=20"

var Client, Err = mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
var coll = Client.Database("postcommentdb").Collection("post")

func (s *Server) CreatePost(ctx context.Context, m *CreatePostRequest) (*CreatePostResponse, error) {
	var userId, postText = m.UserId, m.PostText
	doc := Post{UserId: userId, PostText: postText}

	result, err := coll.InsertOne(context.TODO(), doc)

	if err != nil {
		return nil, err
	}

	postId := result.InsertedID.(primitive.ObjectID).Hex()

	return &CreatePostResponse{PostId: postId, Body: "Successfully created post."}, nil
}

func (s *Server) GetPostFeed(ctx context.Context, m *GetPostFeedRequest) (*GetPostFeedResponse, error) {
	filter := bson.D{{}}
	opts := options.Find().SetLimit(10)

	cursor, err := coll.Find(context.TODO(), filter, opts)

	if err != nil {
		return nil, err
	}

	var returnedPosts []*PostType

	if err = cursor.All(context.TODO(), &returnedPosts); err != nil {
		return nil, err
	}

	return &GetPostFeedResponse{Posts: returnedPosts, Body: "Successfully retrieved post feed."}, nil
}

func (s *Server) LikePost(ctx context.Context, m *LikePostRequest) (*LikePostResponse, error) {
	return nil, nil
}

package comment

import (
	"time"
)

type Comment struct {
	ID          int32 `gorm:"type: SERIAL PRIMARY KEY"`
	UserId      int32
	PostId      int32
	CommentText string `gorm:"type: VARCHAR(1300) NOT NULL"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

type Server struct {
}

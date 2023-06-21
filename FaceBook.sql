create database FaceBook
go

use FaceBook
go

create table UserProfile
(
	Img char(1000),
	Name nvarchar(1000),
	Address nvarchar(1000),
	Phone char(10) primary key,
	BirthDay DateTime
)
go

create table FriendShip
(
	ProfileID1 char(10),
	ProfileID2 char(10),
	Relationship nvarchar(100) default N'Chờ Xác Nhận',

	primary key (ProfileID1 ,ProfileID2 ),

	Foreign key (ProfileID1) references UserProfile(Phone),
	Foreign key (ProfileID2) references UserProfile(Phone),
)
go

create table Post
(
	Id int identity primary key,
	ProfileID int,
	Content nvarchar(1000),
	Img char(1000),
	CreatedTime datetime,

	Foreign key (ProfileID) references UserProfile(ID),
)

create table tbLike
(
	PostId int,
	ProfileID int,

	primary key(PostId,ProfileID),
	Foreign key (ProfileID) references UserProfile(ID),
	Foreign key (PostId) references Post(ID),
)

create table CommentShare
(
	Id int identity primary key,
	Category nvarchar(100),
	PostId int,
	ProfileID int,

	Foreign key (ProfileID) references UserProfile(ID),
	Foreign key (PostId) references Post(ID),
	Foreign key (Id) references Post(ID),
)

insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 1' , N'Hưng Yên' , '0989345123' , '1-1-2002')
insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 2' , N'Hưng Yên' , '0989345123', '1-1-2002')
insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 3' , N'Hưng Yên' , '0989345123', '1-1-2002')
insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 4' , N'Hưng Yên' , '0989345123', '1-1-2002')
insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 5' , N'Hưng Yên' , '0989345123', '1-1-2002')
insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 6' , N'Hưng Yên' , '0989345123', '1-1-2002')
insert into UserProfile
values('../BackEnd/public/images/anh1.png', N'Người dùng 7' , N'Hưng Yên' , '0989345123', '1-1-2002')



 
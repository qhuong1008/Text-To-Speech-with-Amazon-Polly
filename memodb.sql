create database memozone_db

go
use memozone_db


go
create table Account(
	accountId int IDENTITY(1,1) primary key,
	username varchar(200),
	password varchar(20),
	name nvarchar(200),
	email varchar(200),
)

go
create table Course (
	courseId int IDENTITY(1,1) primary key,
	courseName nvarchar(200),
	accountId int,
	constraint fk_accountId foreign key (accountId) references Account(accountId) on delete cascade
)

go
create table Topic (
	topicId int IDENTITY(1,1) primary key,
	topicName nvarchar(200),
	courseId int,
	foreign key (courseId) references Course(courseId) on delete cascade
)

go
create table Word (
	wordId int IDENTITY(1,1) primary key,
	eng varchar(200),
	pronounce varchar(200),
	viet nvarchar(200),
	topicId int,
	foreign key (topicId) references Topic(topicId) on delete cascade
)

go
insert into Account values ('huongcute','123456',N'Phạm Quỳnh Hương','huong@gmail.com')
insert into Account values ('nguyenlien','123456',N'Nguyễn Thị Bích Liên','lien@gmail.com')
insert into Account values ('quanghuy','123456',N'Phạm Quang Huy','huy@gmail.com')

insert into Course values('toeic 200+',1)
insert into Course values('toeic 300+',1)
insert into Course values('toeic 400+',2)
insert into Course values('toeic 500+',2)

go
insert into Topic values('Marketing',1)
insert into Topic values('School',1)
insert into Topic values('Technology',1)
insert into Topic values('Marketing',2)
insert into Topic values('School',2)
insert into Topic values('Technology',2)
insert into Topic values('Movies',2)


insert into Word values('cat','pronounce of cat',N'mèo',1)
insert into Word values('dog','pronounce of dog',N'chó',1)
insert into Word values('chicken','pronounce of chicken',N'gà',1)
insert into Word values('llama','pronounce of llama',N'lạc đà không bướu',1)


select * from Course
select * from Topic
select * from Word



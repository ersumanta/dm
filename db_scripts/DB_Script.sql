create table tasks (
    id serial primary key,
    title VARCHAR (1000),
    updatedAt timestamp
);

create table lists (
    id serial primary key,
    title VARCHAR (1000),
    updatedAt timestamp
);

create table taskList (
    id serial primary key,
    listId integer,
    taskId integer,
    CONSTRAINT fk_list
      FOREIGN KEY(listId) 
	  REFERENCES lists(id),
    CONSTRAINT fk_task
      FOREIGN KEY(taskId) 
	  REFERENCES tasks(id)
);
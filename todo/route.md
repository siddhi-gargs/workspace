ROUTING THE PATH

| method | PATH             | req Purpose     | statusCode | header                             | response | response look like                             |
| ------ | ---------------- | --------------- | ---------- | ---------------------------------- | -------- | ---------------------------------------------- |
| GET    | /todo            | taking all task | 200        | 'content-type': "text/html"        | OK       | [{id :1, task : taskname, status : false}, {}] |
| POST   | /todo/task       | adding new Task | 201        | 'content-type': "application/json" | OK       | -                                              |
| PATCH  | /todo/done/{id}  | to make it done | 201        | 'content-type': "application/json" | OK       |
| DELETE | todo/delete/{id} | deleting the id | 204        |

- first thing i have to create server client connection
- then i will inject the external dependies and i have to render it
- then i Will Post the task from outside
- then i will take the id and will try to do something with that

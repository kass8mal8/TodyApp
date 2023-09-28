import jwt from 'jwt-decode'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDlhNmNlNzdhZTdmNmEwZmZlZjM1ZSIsImlhdCI6MTY5NTgyODIyMiwiZXhwIjoxNjk1ODMxODIyfQ.5U9vsm4XWKcpNeSHhP1J2-pts0jLyl79ObWrKgxMQhk'
const decoded = jwt(token)
console.log(decoded)
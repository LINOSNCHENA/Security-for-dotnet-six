# JAVA vs DOTNET

## Web App frameworks

WebApp  Spring.NET ASP. NET 
Hibernate, Spring

## Data Access

ADO.NET OLE DB Dapper
JDBC

## Efficiency

Java = bytecode+ then interprete(slower)
C#  = Compiles and then run

## Spring frmaework for .NET

Inversion of Control container
Controllers(5)
@GetMapping
@PostMapping
@PutMapping
@DeleteMapping
@PatchMapping


## Sping-dotnet

dotnet new console -o MyApp -f net7.0
cd MyApp
dotnet run

## commands
mvn clean install
mvn spring-boot:run

javac TestServlet.java
tomcart started

## attacks(WITHOUT PREPARED STATEMENT)

OR/DROP/UNION-SELECT/---
SELECT FirstName, LastName, Salary
  FROM Employee
 WHERE EmployeeNumber = 78234 OR 1=1

# End
package com.postgres.demo;

import java.net.ContentHandler;

import javax.naming.Context;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.autoconfigure.web.WebProperties.Resources.Chain.Strategy.Content;

import com.postgres.demo.model.Person;
import com.postgres.demo.spring.dao.PersonDAO;
import com.postgres.demo.spring.config.AppConfig;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

		PersonDAO personDAO = Content.getBean(PersonDAO.class);
		// Object lion = context.getBean("lion");

		System.out.println("List of person is:");

		for (Person p : personDAO.getAllPersons()) {
			System.out.println(p);
		}

		System.out.println("\nGet person with ID 2");

		Person personById = personDAO.getPersonById(2L);
		System.out.println(personById);

		System.out.println("\nCreating person: ");
		Person person = new Person(4L, 36, "Sergey", "Emets");
		System.out.println(person);
		personDAO.createPerson(person);
		System.out.println("\nList of person is:");

		for (Person p : personDAO.getAllPersons()) {
			System.out.println(p);
		}

		System.out.println("\nDeleting person with ID 2");
		personDAO.deletePerson(personById);

		System.out.println("\nUpdate person with ID 4");

		Person pperson = personDAO.getPersonById(4L);
		pperson.setLastName("CHANGED");
		personDAO.updatePerson(pperson);

		System.out.println("\nList of person is:");
		for (Person p : personDAO.getAllPersons()) {
			System.out.println(p);
		}

		context.close();
	}

}

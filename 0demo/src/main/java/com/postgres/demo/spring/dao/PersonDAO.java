// package com.journaldev.spring.dao;
package com.postgres.demo.spring.dao;

import java.util.List;

import com.postgres.demo.model.Person;

// import com.journaldev.model.Person;

public interface PersonDAO {
	Person getPersonById(Long id);

	List<Person> getAllPersons();

	boolean deletePerson(Person person);

	boolean updatePerson(Person person);

	boolean createPerson(Person person);
}

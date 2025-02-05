package com.javaguide.Spring_bootbackend;

import com.javaguide.Spring_bootbackend.model.Employee;
import com.javaguide.Spring_bootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class SpringBootbackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootbackendApplication.class, args);
	}

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception{
		Employee employee = new Employee();
		employee.setFirstname("shivtej");
		employee.setLastname("Gaikwad");
		employee.setEmpid("shiv@gmail.com");

		Employee employee1 = new Employee();
		employee1.setFirstname("sarthak");
		employee1.setLastname("Ghuge");
		employee1.setEmpid("sarthak@gmail.com");

		employeeRepository.save(employee1);
		employeeRepository.save(employee);
		System.out.println("Employees saved successfully!");
	}
}

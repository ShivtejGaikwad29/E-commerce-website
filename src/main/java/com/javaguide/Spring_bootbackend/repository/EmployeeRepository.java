package com.javaguide.Spring_bootbackend.repository;

import com.javaguide.Spring_bootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee , Long> {
// all crud operations.
}

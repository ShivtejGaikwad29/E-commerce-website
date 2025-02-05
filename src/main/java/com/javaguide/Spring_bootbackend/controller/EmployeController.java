package com.javaguide.Spring_bootbackend.controller;

import com.javaguide.Spring_bootbackend.exception.resourceNotFoundEception;
import com.javaguide.Spring_bootbackend.model.Employee;
import com.javaguide.Spring_bootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeController {
    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new resourceNotFoundEception("employe not found bi id"+id));
        return ResponseEntity.ok(employee);

    }
}

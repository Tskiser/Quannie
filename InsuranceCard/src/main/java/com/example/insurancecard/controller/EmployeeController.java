package com.example.insurancecard.controller;

import com.example.insurancecard.dto.EmployeeDto;
import com.example.insurancecard.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<EmployeeDto>> getAll(){
        List<EmployeeDto> result = employeeService.getAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<EmployeeDto> create(@RequestBody EmployeeDto em){
        EmployeeDto result = employeeService.save(em);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<EmployeeDto> update(@RequestBody EmployeeDto em, @PathVariable Long id){
        EmployeeDto result = employeeService.update(em, id);
        return new ResponseEntity<>(result, result != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> remove(@PathVariable Long id){
        Boolean result = employeeService.remove(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}

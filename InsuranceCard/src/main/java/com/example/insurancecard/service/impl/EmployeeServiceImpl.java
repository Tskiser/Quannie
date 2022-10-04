package com.example.insurancecard.service.impl;

import com.example.insurancecard.dto.EmployeeDto;
import com.example.insurancecard.entity.Employee;
import com.example.insurancecard.repository.EmployeeRepository;
import com.example.insurancecard.service.EmployeeService;
import com.globits.core.domain.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<EmployeeDto> getAll() {
        List<Employee> list = repository.findAll();
        List<EmployeeDto> result = new ArrayList<>();
        for (Employee em : list){
            result.add(new EmployeeDto(em));
        }
        return result;
    }

    @Override
    public EmployeeDto save(EmployeeDto em) {
        if(em != null){
            Employee employee = new Employee();
            employee.setCode(em.getCode());
            employee.setName(em.getName());
            employee = repository.save(employee);
            if(employee != null){
                return new EmployeeDto(employee);
            }
        }
        return null;
    }

    @Override
    public EmployeeDto update(EmployeeDto em, Long id) {
        if(em != null){
            Employee employee = null;
            if(id !=null){
                Optional<Employee> optional =repository.findById(id);
                if(optional.isPresent()){
                    employee = optional.get();
                }
            }
            if(employee != null){
                employee.setName(em.getName());
                employee.setCode(em.getCode());
                employee = repository.save(employee);
                return new EmployeeDto(employee);
            } else {
                return null;
            }
        }
        return null;
    }

    @Override
    public Boolean remove(Long id) {
        Employee entity = null;
        Optional<Employee> optional = repository.findById(id);
        if (optional.isPresent()) {
            entity = optional.get();
        }
        if (entity != null) {
            repository.delete(entity);
            return true;
        } else {
            return false;
        }
    }
}

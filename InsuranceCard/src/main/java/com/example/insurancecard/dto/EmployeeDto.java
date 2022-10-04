package com.example.insurancecard.dto;

import com.example.insurancecard.entity.Employee;

public class EmployeeDto {
    private long id;
    private String name;
    private String code;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public EmployeeDto(){}

    public EmployeeDto(Employee em){
        if (em!=null) {
            this.setId(em.getId());
            this.setCode(em.getCode());
            this.setName(em.getName());
        }
    }
}

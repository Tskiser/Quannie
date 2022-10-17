package com.example.insurancecard.dto;

import com.example.insurancecard.entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoleDto {
    private Long id;
    private String name;
    public RoleDto(){

    }
    public RoleDto(Role role){
        this.setId(role.getId());
        this.setName(role.getName());
    }
}

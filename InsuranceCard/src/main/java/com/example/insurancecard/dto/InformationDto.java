package com.example.insurancecard.dto;

import com.example.insurancecard.entity.Information;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class InformationDto {

    private long id;
    private String code;
    private String name;
    private int gender;
    private String folk;
    private Date brithDate;
    private String phone;
    private String country;
    private String city;
    private String district;
    private String street;

    public InformationDto(){

    }

    public InformationDto(Information information){
        if (null != information){
            this.setId(information.getId());
            this.setCode(information.getCode());
            this.setName(information.getName());
            this.setGender(information.getGender());
            this.setFolk(information.getFolk());
            this.setBrithDate(information.getBrithDate());
            this.setPhone(information.getPhone());
            this.setCountry(information.getCountry());
            this.setCity(information.getCity());
            this.setDistrict(information.getDistrict());
            this.setStreet(information.getStreet());
        }
    }

}

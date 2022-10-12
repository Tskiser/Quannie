package com.example.insurancecard.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Table(name = "tbl_motoBike")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MotorBike {
    @Id
    @Column(name = "license", length = 9, unique = true)
    private String license;
    @Column(name = "model", length = 255)
    private String model;
    @Column(name = "manufacturer", length = 255)
    private String manufacturer;
    @Column(name = "color", length = 255)
    private String color;
    @Column(name = "yearOfMake")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date MFG;
    @Column(name = "frameNumber", length = 255)
    private String frameNumber;
    @Column(name = "engineNumber", length = 255)
    private String engineNumber;


}

package com.example.insurancecard.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;

@Table(name = "tbl_Profile")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Information {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "code", length = 255)
    private String code;
    @Column(name = "fullName", length = 255)
    private String name;
    @Column(name = "gender")
    private int gender;
    @Column(name = "nationality", length = 255)
    private String folk;
    @Column(name = "birthDate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date brithDate;
    @Column(name = "phoneNumber", length = 10)
    private String phone;
    @Column(name = "country", length = 255)
    private String country;
    @Column(name = "city", length = 255)
    private String city;
    @Column(name = "district", length = 255)
    private String district;
    @Column(name = "street", length = 255)
    private String street;

//    @ManyToOne
//    @JoinColumn(name = "address_id", nullable = false)
//    private Address address;
    @OneToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    

}

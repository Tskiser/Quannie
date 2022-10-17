package com.example.insurancecard.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Table(name = "tbl_account")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

//    @Column(name = "role", nullable = false)
//    private long roleId;
//    @Column(name = "roleName", nullable = false, length = 255)
//    private String roleName;
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="role_id")
    private Role role;

//    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
//    private Information information;
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<MotorBike> motorBike;

}

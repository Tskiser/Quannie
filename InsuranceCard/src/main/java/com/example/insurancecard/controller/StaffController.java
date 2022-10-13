package com.example.insurancecard.controller;

import com.example.insurancecard.dto.InformationDto;
import com.example.insurancecard.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StaffController {

    @Autowired
    private StaffService service;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity<InformationDto> create(@RequestBody InformationDto dto){
        InformationDto infor = service.save(dto);
        return new ResponseEntity<>(infor, HttpStatus.OK);
    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public InformationDto createInfor(@RequestBody InformationDto infor){
        return service.save(infor);
    }
    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<List<InformationDto>> getAll(){
        List<InformationDto> informationDtos = service.getAll();
        return new ResponseEntity<>(informationDtos, HttpStatus.OK);
    }

}

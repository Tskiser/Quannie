package com.example.insurancecard.service;

import com.example.insurancecard.dto.InformationDto;

import java.util.List;

public interface StaffService {

    List<InformationDto> getAll();
    InformationDto save(InformationDto information);
    InformationDto update(InformationDto information, Long id);
    boolean remove(Long id);
    InformationDto getStaffById(Long id);
    
}

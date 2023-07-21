package it.tripagency_capstone_epicode.security.service;

import it.tripagency_capstone_epicode.security.payload.LoginDto;
import it.tripagency_capstone_epicode.security.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}

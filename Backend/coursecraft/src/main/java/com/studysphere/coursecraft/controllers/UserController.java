package com.studysphere.coursecraft.controllers;

import com.studysphere.coursecraft.models.User;
import com.studysphere.coursecraft.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String firstname = payload.get("firstname");
        String lastname = payload.get("lastname");
        String email = payload.get("email");
        String password = payload.get("password");
        String mobileNo = payload.get("mobileNo");
        boolean isAdmin = Boolean.parseBoolean(payload.get("isAdmin"));
        return new ResponseEntity<User>(userService.createUser(username, email, password, mobileNo, firstname, lastname, isAdmin), HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public ResponseEntity<Optional<User>> login(@RequestBody Map<String, String> payload) {
        Optional<User> response = userService.loginUser(payload.get("username"), payload.get("password"));
        if(response.isPresent()){
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }else{
            return new ResponseEntity<>(Optional.empty(), HttpStatus.UNAUTHORIZED);
        }

    }
}

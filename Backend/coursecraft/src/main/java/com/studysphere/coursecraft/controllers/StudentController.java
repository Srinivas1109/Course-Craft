package com.studysphere.coursecraft.controllers;

import com.studysphere.coursecraft.models.Student;
import com.studysphere.coursecraft.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/register/student")
    public ResponseEntity<Student> registerStudent(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String firstname = payload.get("firstname");
        String lastname = payload.get("lastname");
        String email = payload.get("email");
        String password = payload.get("password");
        String mobileNo = payload.get("mobileNo");
        return new ResponseEntity<Student>(studentService.createStudent(username, email, password, mobileNo, firstname, lastname), HttpStatus.CREATED);
    }

    @GetMapping("/login/student")
    public ResponseEntity<Optional<Student>> loginStudent(@RequestBody Map<String, String> payload) {
        Optional<Student> response = studentService.loginUser(payload.get("username"), payload.get("password"));
        if(response.isPresent()){
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }else{
            return new ResponseEntity<>(Optional.empty(), HttpStatus.UNAUTHORIZED);
        }

    }
}

package com.studysphere.coursecraft.services;

import com.studysphere.coursecraft.models.Student;
import com.studysphere.coursecraft.repositories.StudentRepository;
import com.studysphere.coursecraft.utils.CourseCraftUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Optional<Student> getStudent(String username){
        return studentRepository.findStudentByUsername(username);
    }

    public Student createStudent(String username, String email, String password, String mobileNo, String firstname, String lastname){
        String hashedPassword = CourseCraftUtils.hashPassword(password);
        Student student = studentRepository.insert(new Student(username, email, hashedPassword, mobileNo, firstname, lastname));
        return new Student(student.getId(), student.getUsername(), student.getEmail(), student.getMobileNo(), student.getFirstname(), student.getLastname());
    }

    public Optional<Student> loginUser(String username, String password){
        Optional<Student> student = studentRepository.findStudentByUsername(username);
        if(student.isPresent()){
            if(CourseCraftUtils.matchPassword(password, student.get().getPassword())){
                return Optional.of(new Student(student.get().getId(), student.get().getUsername(), student.get().getEmail(), student.get().getMobileNo(), student.get().getFirstname(), student.get().getLastname()));
            }
        }
        return Optional.empty();
    }
}

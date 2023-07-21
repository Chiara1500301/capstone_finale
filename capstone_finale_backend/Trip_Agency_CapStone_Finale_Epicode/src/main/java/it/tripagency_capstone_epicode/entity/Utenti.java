package it.tripagency_capstone_epicode.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "utenti")
public class Utenti {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String password;
    private String nome;
    private String cognome;
    private String username;
    private LocalDate dataNascita;
    private String numeroTelefono;

    public Utenti(String nome, String cognome, String username, LocalDate dataNascita, String numeroTelefono,
                  String email, String password) {
        this.nome = nome;
        this.cognome = cognome;
        this.username = username;
        this.dataNascita = dataNascita;
        this.numeroTelefono = numeroTelefono;
        this.email = email;
        this.password = password;
    }
}


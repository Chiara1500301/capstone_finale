package it.tripagency_capstone_epicode.entity;

import com.github.javafaker.Faker;
import it.tripagency_capstone_epicode.repository.UtentiRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Locale;

@Component
public class FakerUtenti {
    private final UtentiRepository utentiRepository;

    public FakerUtenti(UtentiRepository utentiRepository) {
        this.utentiRepository = utentiRepository;
    }

    public void generaUtenti(int numeroUtentiDaGenerare) {
        Faker faker = new Faker(new Locale("it"));

        for (int i = 0; i < numeroUtentiDaGenerare; i++) {
            String nome = faker.name().firstName();
            String cognome = faker.name().lastName();
            String email = String.format("%s.%s@example.com", nome.toLowerCase(), cognome.toLowerCase());
            String password = faker.internet().password();
            LocalDate dataNascita = faker.date().birthday().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            String numeroTelefono = faker.phoneNumber().phoneNumber();

            Utenti utente = new Utenti(nome, cognome, "", dataNascita, numeroTelefono, email, password);
            utentiRepository.save(utente);
        }
    }
}

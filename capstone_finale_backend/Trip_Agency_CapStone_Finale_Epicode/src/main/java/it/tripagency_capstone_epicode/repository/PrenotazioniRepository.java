package it.tripagency_capstone_epicode.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import it.tripagency_capstone_epicode.entity.Prenotazioni;

@Repository
public interface PrenotazioniRepository extends JpaRepository<Prenotazioni, Long> {
    List<Prenotazioni> findByCostoTotale(double costoTotale);
    List<Prenotazioni> findByDestinazioneNome(String destinazioneNome);
    List<Prenotazioni> findByCostoTotaleAndDestinazioneNome(double costoTotale, String destinazioneNome);
}


package it.tripagency_capstone_epicode.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.tripagency_capstone_epicode.entity.Destinazioni;

import java.util.List;

@Repository
public interface DestinazioniRepository extends JpaRepository<Destinazioni, Long> {
    List<Destinazioni> findByPaese(String paese);
    List<Destinazioni> findByCitta(String citta);
}


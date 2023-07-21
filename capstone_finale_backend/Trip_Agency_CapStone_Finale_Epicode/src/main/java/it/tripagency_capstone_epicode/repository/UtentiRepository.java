package it.tripagency_capstone_epicode.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import it.tripagency_capstone_epicode.entity.Utenti;

import java.util.List;
import java.util.Optional;

@Repository
public interface UtentiRepository extends JpaRepository<Utenti, Long> {
    Optional<Utenti> findById(Long id);
    Optional<Utenti> findByEmail(String email);
    @Query(value = "SELECT * FROM utenti ORDER BY random() LIMIT 1", nativeQuery = true)
    Optional<Utenti> findRandomUser();

    List<Utenti> findAll();
    void deleteById(Long id);
    List<Utenti> findByNome(String nome);
    List<Utenti> findByCognome(String cognome);
    
    @Override
    <S extends Utenti> List<S> saveAll(Iterable<S> utenti);
}


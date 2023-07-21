package it.tripagency_capstone_epicode.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.tripagency_capstone_epicode.entity.Destinazioni;
import it.tripagency_capstone_epicode.repository.DestinazioniRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DestinazioniService {
    private final DestinazioniRepository destinazioniRepository;

    @Autowired
    public DestinazioniService(DestinazioniRepository destinazioniRepository) {
        this.destinazioniRepository = destinazioniRepository;
    }

    public Optional<Destinazioni> getDestinazioneById(Long id) {
        return destinazioniRepository.findById(id);
    }

    public List<Destinazioni> getAllDestinazioni() {
        return destinazioniRepository.findAll();
    }

    public List<Destinazioni> getDestinazioniByPaese(String paese) {
        return destinazioniRepository.findByPaese(paese);
    }

    public List<Destinazioni> getDestinazioniByCitta(String citta) {
        return destinazioniRepository.findByCitta(citta);
    }

    public Destinazioni saveDestinazione(Destinazioni destinazione) {
        return destinazioniRepository.save(destinazione);
    }

    public List<Destinazioni> saveDestinazioni(List<Destinazioni> destinazioni) {
        return destinazioniRepository.saveAll(destinazioni);
    }

    public void deleteDestinazione(Long id) {
        destinazioniRepository.deleteById(id);
    }
}


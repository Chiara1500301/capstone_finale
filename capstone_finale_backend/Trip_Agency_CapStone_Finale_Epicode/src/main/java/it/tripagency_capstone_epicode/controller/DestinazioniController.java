package it.tripagency_capstone_epicode.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import it.tripagency_capstone_epicode.entity.Destinazioni;
import it.tripagency_capstone_epicode.services.DestinazioniService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/destinazioni")
public class DestinazioniController {
    private final DestinazioniService destinazioniService;

    @Autowired
    public DestinazioniController(DestinazioniService destinazioniService) {
        this.destinazioniService = destinazioniService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Destinazioni> getDestinazioneById(@PathVariable Long id) {
        Optional<Destinazioni> destinazione = destinazioniService.getDestinazioneById(id);
        return destinazione.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Destinazioni> getAllDestinazioni() {
        return destinazioniService.getAllDestinazioni();
    }

    @GetMapping("/paese/{paese}")
    public List<Destinazioni> getDestinazioniByPaese(@PathVariable String paese) {
        return destinazioniService.getDestinazioniByPaese(paese);
    }

    @GetMapping("/citta/{citta}")
    public List<Destinazioni> getDestinazioniByCitta(@PathVariable String citta) {
        return destinazioniService.getDestinazioniByCitta(citta);
    }

    @PostMapping
    public ResponseEntity<Destinazioni> saveDestinazione(@RequestBody Destinazioni destinazione) {
        Destinazioni savedDestinazione = destinazioniService.saveDestinazione(destinazione);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDestinazione);
    }

    @PostMapping("/batch")
    public ResponseEntity<List<Destinazioni>> saveDestinazioni(@RequestBody List<Destinazioni> destinazioni) {
        List<Destinazioni> savedDestinazioni = destinazioniService.saveDestinazioni(destinazioni);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDestinazioni);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDestinazione(@PathVariable Long id) {
        destinazioniService.deleteDestinazione(id);
        return ResponseEntity.noContent().build();
    }
}


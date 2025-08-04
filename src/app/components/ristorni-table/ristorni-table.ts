import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface RistorniData {
  id: number;
  stato: 'active' | 'inactive';
  intestazione: string;
  orePresenza: number;
  socioDaGiorni: number;
  imponibile: number;
  rCalcolato: number;
  max: number;
  ristorno: number;
  rErogato: number;
  rACedolino: number;
  rNettiACapitale: number;
  rLordi: number;
  ritenuta: number;
  isAutonomo: boolean;
}

@Component({
  selector: 'app-ristorni-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ristorni-table.html',
  styleUrls: ['./ristorni-table.scss']
})
export class RistorniTableComponent implements OnInit, AfterViewInit {
  importoIniziale: number = 1000000;
  massimoRistornabile: number = 793475;
  includiAutonomi: boolean = true;
  
  sociLavoratori: number = 107;
  autonomi: number = 1;
  
  totaleDaFormula: number = 0;
  totaleRistorni: number = 0;

  // Proprietà per i filtri
  searchTerm: string = '';
  statusFilter: string = '';

  // Proprietà per la paginazione
  currentPage: number = 1;
  itemsPerPage: number = 10;
  Math = Math; // Per usare Math nel template

  constructor(private cdr: ChangeDetectorRef) {}

  ristorniData: RistorniData[] = [
    {
      id: 1,
      stato: 'active',
      intestazione: 'Mario Rossi',
      orePresenza: 1800.00,
      socioDaGiorni: 365,
      imponibile: 45000.00,
      rCalcolato: 2250.00,
      max: 500.00,
      ristorno: 500.00,
      rErogato: 500,
      rACedolino: 25000,
      rNettiACapitale: 25000,
      rLordi: 25000,
      ritenuta: 3125.00,
      isAutonomo: false
    },
    {
      id: 2,
      stato: 'active',
      intestazione: 'Giulia Bianchi',
      orePresenza: 1750.00,
      socioDaGiorni: 320,
      imponibile: 42000.00,
      rCalcolato: 2100.00,
      max: 480.00,
      ristorno: 480.00,
      rErogato: 480,
      rACedolino: 24000,
      rNettiACapitale: 24000,
      rLordi: 24000,
      ritenuta: 3000.00,
      isAutonomo: false
    },
    {
      id: 3,
      stato: 'active',
      intestazione: 'Luca Verdi',
      orePresenza: 1900.00,
      socioDaGiorni: 400,
      imponibile: 48000.00,
      rCalcolato: 2400.00,
      max: 520.00,
      ristorno: 520.00,
      rErogato: 520,
      rACedolino: 26000,
      rNettiACapitale: 26000,
      rLordi: 26000,
      ritenuta: 3250.00,
      isAutonomo: false
    },
    {
      id: 4,
      stato: 'active',
      intestazione: 'Anna Neri',
      orePresenza: 1600.00,
      socioDaGiorni: 280,
      imponibile: 40000.00,
      rCalcolato: 2000.00,
      max: 450.00,
      ristorno: 450.00,
      rErogato: 450,
      rACedolino: 22500,
      rNettiACapitale: 22500,
      rLordi: 22500,
      ritenuta: 2812.50,
      isAutonomo: false
    },
    {
      id: 5,
      stato: 'active',
      intestazione: 'Paolo Viola',
      orePresenza: 2000.00,
      socioDaGiorni: 450,
      imponibile: 50000.00,
      rCalcolato: 2500.00,
      max: 550.00,
      ristorno: 550.00,
      rErogato: 550,
      rACedolino: 27500,
      rNettiACapitale: 27500,
      rLordi: 27500,
      ritenuta: 3437.50,
      isAutonomo: true
    },
    {
      id: 6,
      stato: 'active',
      intestazione: 'Francesca Romano',
      orePresenza: 1850.00,
      socioDaGiorni: 340,
      imponibile: 46000.00,
      rCalcolato: 2300.00,
      max: 510.00,
      ristorno: 510.00,
      rErogato: 510,
      rACedolino: 25500,
      rNettiACapitale: 25500,
      rLordi: 25500,
      ritenuta: 3187.50,
      isAutonomo: false
    },
    {
      id: 7,
      stato: 'active',
      intestazione: 'Roberto Ferrari',
      orePresenza: 1650.00,
      socioDaGiorni: 290,
      imponibile: 41000.00,
      rCalcolato: 2050.00,
      max: 460.00,
      ristorno: 460.00,
      rErogato: 460,
      rACedolino: 23000,
      rNettiACapitale: 23000,
      rLordi: 23000,
      ritenuta: 2875.00,
      isAutonomo: true
    },
    {
      id: 8,
      stato: 'active',
      intestazione: 'Simona Conti',
      orePresenza: 1950.00,
      socioDaGiorni: 380,
      imponibile: 49000.00,
      rCalcolato: 2450.00,
      max: 540.00,
      ristorno: 540.00,
      rErogato: 540,
      rACedolino: 27000,
      rNettiACapitale: 27000,
      rLordi: 27000,
      ritenuta: 3375.00,
      isAutonomo: true
    },
    {
      id: 9,
      stato: 'active',
      intestazione: 'Andrea Martini',
      orePresenza: 1700.00,
      socioDaGiorni: 310,
      imponibile: 43000.00,
      rCalcolato: 2150.00,
      max: 470.00,
      ristorno: 470.00,
      rErogato: 470,
      rACedolino: 24000,
      rNettiACapitale: 24000,
      rLordi: 24000,
      ritenuta: 3000.00,
      isAutonomo: false
    },
    {
      id: 10,
      stato: 'active',
      intestazione: 'Elena Ricci',
      orePresenza: 1820.00,
      socioDaGiorni: 355,
      imponibile: 47000.00,
      rCalcolato: 2350.00,
      max: 525.00,
      ristorno: 525.00,
      rErogato: 525,
      rACedolino: 26000,
      rNettiACapitale: 26000,
      rLordi: 26000,
      ritenuta: 3250.00,
      isAutonomo: false
    },
    {
      id: 11,
      stato: 'active',
      intestazione: 'Marco Pellegrini',
      orePresenza: 1780.00,
      socioDaGiorni: 330,
      imponibile: 44000.00,
      rCalcolato: 2200.00,
      max: 490.00,
      ristorno: 490.00,
      rErogato: 490,
      rACedolino: 24500,
      rNettiACapitale: 24500,
      rLordi: 24500,
      ritenuta: 3062.50,
      isAutonomo: false
    },
    {
      id: 12,
      stato: 'active',
      intestazione: 'Chiara Lombardi',
      orePresenza: 1880.00,
      socioDaGiorni: 370,
      imponibile: 47500.00,
      rCalcolato: 2375.00,
      max: 530.00,
      ristorno: 530.00,
      rErogato: 530,
      rACedolino: 26500,
      rNettiACapitale: 26500,
      rLordi: 26500,
      ritenuta: 3312.50,
      isAutonomo: false
    },
    {
      id: 13,
      stato: 'inactive',
      intestazione: 'Giuseppe Morelli',
      orePresenza: 1200.00,
      socioDaGiorni: 180,
      imponibile: 30000.00,
      rCalcolato: 1500.00,
      max: 300.00,
      ristorno: 300.00,
      rErogato: 300,
      rACedolino: 15000,
      rNettiACapitale: 15000,
      rLordi: 15000,
      ritenuta: 1875.00,
      isAutonomo: false
    },
    {
      id: 14,
      stato: 'active',
      intestazione: 'Valentina Costa',
      orePresenza: 1960.00,
      socioDaGiorni: 395,
      imponibile: 51000.00,
      rCalcolato: 2550.00,
      max: 560.00,
      ristorno: 560.00,
      rErogato: 560,
      rACedolino: 28000,
      rNettiACapitale: 28000,
      rLordi: 28000,
      ritenuta: 3500.00,
      isAutonomo: true
    },
    {
      id: 15,
      stato: 'active',
      intestazione: 'Davide Santoro',
      orePresenza: 1750.00,
      socioDaGiorni: 325,
      imponibile: 43500.00,
      rCalcolato: 2175.00,
      max: 485.00,
      ristorno: 485.00,
      rErogato: 485,
      rACedolino: 24250,
      rNettiACapitale: 24250,
      rLordi: 24250,
      ritenuta: 3031.25,
      isAutonomo: false
    }
  ];

  ngOnInit() {
    this.calculateTotals();
  }

  ngAfterViewInit() {
    // Forza il rilevamento delle modifiche dopo l'inizializzazione della vista
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  // Getter per i dati filtrati
  get filteredData(): RistorniData[] {
    let filtered = this.ristorniData;

    // Filtro per inclusione autonomi
    if (!this.includiAutonomi) {
      filtered = filtered.filter(item => !item.isAutonomo);
    }

    // Filtro per intestazione
    if (this.searchTerm) {
      filtered = filtered.filter(item => 
        item.intestazione.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filtro per stato
    if (this.statusFilter) {
      const statusValue = this.statusFilter === 'ACCETTATO' ? 'active' : 'inactive';
      filtered = filtered.filter(item => item.stato === statusValue);
    }

    return filtered;
  }

  // Getter per i dati paginati
  get paginatedData(): RistorniData[] {
    const filtered = this.filteredData;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  // Getter per il numero totale di pagine
  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  // Getter per l'array delle pagine da mostrare
  get pageNumbers(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Metodi per la paginazione
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Metodo per resettare la pagina quando si applicano filtri
  onFilterChange(): void {
    this.currentPage = 1;
  }

  onCalculateClick() {
    this.calculateTotals();
  }

  private calculateTotals() {
    this.totaleDaFormula = this.ristorniData.reduce((sum, item) => sum + item.rCalcolato, 0);
    this.totaleRistorni = this.ristorniData.reduce((sum, item) => sum + item.ristorno, 0);
  }

  getTotalOrePresenza(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.orePresenza, 0);
  }

  getTotalSocioDaGiorni(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.socioDaGiorni, 0);
  }

  getTotalImponibile(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.imponibile, 0);
  }

  getTotalRCalcolato(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.rCalcolato, 0);
  }

  getTotalMax(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.max, 0);
  }

  getTotalRistorno(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.ristorno, 0);
  }

  getTotalRErogato(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.rErogato, 0);
  }

  getTotalRACedolino(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.rACedolino, 0);
  }

  getTotalRNettiACapitale(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.rNettiACapitale, 0);
  }

  getTotalRLordi(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.rLordi, 0);
  }

  getTotalRitenuta(): number {
    return this.ristorniData.reduce((sum, item) => sum + item.ritenuta, 0);
  }

  onExportClick() {
    this.exportToExcel();
  }

  exportToExcel() {
    // Prepara i dati per l'export
    const exportData = this.ristorniData.map(item => ({
      'ID': item.id,
      'Stato': item.stato === 'active' ? 'Attivo' : 'Inattivo',
      'Intestazione': item.intestazione,
      'Tipo': item.isAutonomo ? 'Autonomo' : 'Socio Lavoratore',
      'Ore Presenza': item.orePresenza,
      'Socio da Giorni': item.socioDaGiorni,
      'Imponibile': `€ ${item.imponibile.toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'R. Calcolato': `€ ${item.rCalcolato.toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'Max': `€ ${item.max.toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'Ristorno': `€ ${item.ristorno.toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'R. Erogato': `€ ${item.rErogato.toLocaleString('it-IT')}`,
      'R. a Cedolino': `€ ${item.rACedolino.toLocaleString('it-IT')}`,
      'R. Netti a Capitale': `€ ${item.rNettiACapitale.toLocaleString('it-IT')}`,
      'R. Lordi': `€ ${item.rLordi.toLocaleString('it-IT')}`,
      'Ritenuta 12,50%': `€ ${item.ritenuta.toLocaleString('it-IT', { minimumFractionDigits: 2 })}`
    }));

    // Aggiungi la riga dei totali
    const totalRow = {
      'ID': 0,
      'Stato': 'TOTALE COMPLESSIVO',
      'Intestazione': '',
      'Tipo': '',
      'Ore Presenza': this.getTotalOrePresenza(),
      'Socio da Giorni': this.getTotalSocioDaGiorni(),
      'Imponibile': `€ ${this.getTotalImponibile().toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'R. Calcolato': `€ ${this.getTotalRCalcolato().toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'Max': `€ ${this.getTotalMax().toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'Ristorno': `€ ${this.getTotalRistorno().toLocaleString('it-IT', { minimumFractionDigits: 2 })}`,
      'R. Erogato': `€ ${this.getTotalRErogato().toLocaleString('it-IT')}`,
      'R. a Cedolino': `€ ${this.getTotalRACedolino().toLocaleString('it-IT')}`,
      'R. Netti a Capitale': `€ ${this.getTotalRNettiACapitale().toLocaleString('it-IT')}`,
      'R. Lordi': `€ ${this.getTotalRLordi().toLocaleString('it-IT')}`,
      'Ritenuta 12,50%': `€ ${this.getTotalRitenuta().toLocaleString('it-IT', { minimumFractionDigits: 2 })}`
    };

    exportData.push(totalRow);

    // Crea il workbook
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Ristorni 2024');

    // Imposta la larghezza delle colonne
    const columnWidths = [
      { wch: 5 },   // ID
      { wch: 15 },  // Stato
      { wch: 20 },  // Intestazione
      { wch: 18 },  // Tipo
      { wch: 12 },  // Ore Presenza
      { wch: 15 },  // Socio da Giorni
      { wch: 15 },  // Imponibile
      { wch: 15 },  // R. Calcolato
      { wch: 12 },  // Max
      { wch: 12 },  // Ristorno
      { wch: 12 },  // R. Erogato
      { wch: 15 },  // R. a Cedolino
      { wch: 18 },  // R. Netti a Capitale
      { wch: 12 },  // R. Lordi
      { wch: 16 }   // Ritenuta 12,50%
    ];
    worksheet['!cols'] = columnWidths;

    // Genera il file Excel
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Salva il file con la data corrente
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const fileName = `Ristorni_2024_${dateString}.xlsx`;
    
    saveAs(blob, fileName);
  }
}

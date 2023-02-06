import { SeedData } from "../interfaces/seed-data.interface"
import * as bcrypt from "bcrypt"

export const initialData: SeedData = {
  users: [
    {
      email: "andresjch2804@gmail.com",
      firstName: "Andrés",
      lastName: "Carrillo",
      motherName: "Herrera",
      password: bcrypt.hashSync("d!3fEU3hsa", 10),
      roles: ["user", "admin"],
    },
    {
      email: "planeacion@chetumal.tecnm.mx",
      firstName: "Raquel",
      lastName: "Saavedra",
      motherName: "Vargas",
      password: bcrypt.hashSync("M@michula!", 10),
      roles: ["user", "admin"],
    },
  ],
  actions: [
    { name: "1.1.3-3-1" },
    { name: "1.1.3-4-1" },
    { name: "1.1.4-5-1" },
    { name: "1.3.2-22-1" },
    { name: "2.2.2-4-1" },
    { name: "2.4.1-13-1" },
    { name: "6.2.3-7-1" },
  ],
  lines: [
    { name: "51101", description: " " },
    { name: "51501", description: " " },
    { name: "51901", description: " " },
    { name: "53101", description: " " },
    { name: "56201", description: " " },
    { name: "56601", description: " " },
    { name: "56701", description: " " },
    { name: "53201", description: " " },
    { name: "59101", description: " " },
    { name: "52101", description: " " },
    { name: "56501", description: " " },
  ],
  areas: [
    {description: "DIRECCIÓN" , alias: "DIR", clave_oficial: "1"},
    {description: "SUBDIRECCIÓN SERVICIOS ADMINISTRATIVOS" , alias: "SSA", clave_oficial: "2"},
    {description: "CENTRO DE CÓMPUTO" , alias: "CC", clave_oficial: "10"},
    {description: "DEPARTAMENTO RECURSOS MATERIALES Y SERVICIOS" , alias: "DRMS", clave_oficial: "18"},
    {description: "DEPARTAMENTO MANTENIMIENTO DE EQUIPO" , alias: "DME", clave_oficial: "21"},
    {description: "DEPARTAMENTO RECURSOS FINANCIEROS" , alias: "DRF", clave_oficial: "5"},
    {description: "DEPARTAMENTO RECURSOS HUMANOS" , alias: "DRH", clave_oficial: "7"},
    {description: "SUBDIRECCIÓN PLANEACIÓN Y VINCULACIÓN" , alias: "SPV", clave_oficial: "24"},
    {description: "DEPARTAMENTO GESTIÓN TECNOLÓGICA Y VINCULACIÓN" , alias: "DGTV", clave_oficial: "16"},
    {description: "DEPARTAMENTO SERVICIOS ESCOLARES" , alias: "DSE", clave_oficial: "17"},
    {description: "DEPARTAMENTO ACTIVIDADES EXTRAESCOLARES" , alias: "DAE", clave_oficial: "22"},
    {description: "DEPARTAMENTO PLANEACIÓN, PROGRAMACIÓN Y PRESUPUESTACIÓN" , alias: "DPPP", clave_oficial: "4"},
    {description: "DEPARTAMENTO COMUNICACIÓN Y DIFUSIÓN" , alias: "DCD", clave_oficial: "8"},
    {description: "CENTRO DE INFORMACIÓN" , alias: "CI", clave_oficial: "9"},
    {description: "SUBDIRECCIÓN ACADÉMICA" , alias: "SA", clave_oficial: "3"},
    {description: "DEPARTAMENTO DESARROLLO ACADÉMICO" , alias: "DDA", clave_oficial: "11"},
    {description: "DEPARTAMENTO CIENCIAS DE LA TIERRA" , alias: "DCT", clave_oficial: "12"},
    {description: "DEPARTAMENTO CIENCIAS BÁSICAS" , alias: "DCB", clave_oficial: "13"},
    {description: "DEPARTAMENTO SISTEMAS Y COMPUTACIÓN" , alias: "DSC", clave_oficial: "14"},
    {description: "DEPARTAMENTO ELÉCTRICA Y ELECTRÓNICA" , alias: "DIEE", clave_oficial: "15"},
    {description: "DEPARTAMENTO CIENCIAS ECONÓMICO - ADMINISTRATIVAS" , alias: "DCEA", clave_oficial: "19"},
    {description: "DEPARTAMENTO QUÍMICA Y BIOQUÍMICA" , alias: "DQB", clave_oficial: "20"},
    {description: "DIVISIÓN ESTUDIOS POSGRADO E INVESTIGACIÓN" , alias: "DEPI", clave_oficial: "23"},
    {description: "DIVISIÓN DE ESTUDIOS PROFESIONALES" , alias: "DEP", clave_oficial: "6"},
  ],
  articles: [
    {
      name: "Acondicionador aire",
      description: "Aire acondicionado 24000 BTU minisplit, con control remoto, únicamente frío",
    },
    {
      name: "Acondicionador aire",
      description: "AIRE ACONDICIONADO 18OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO",
    },
    {
      name: "Agitador magnetico (aparato cientifico)",
      description: "Agitador magnético con placa de calentamiento, velocidad 0-1400rpm, dimensiones de la placa 120mm, voltaje 120v, potencia 300 w, dirección doble.",
    },
    { name: "Anaqueles", description: "ANAQUEL METÁLICO DE 5 NIVELES DE ACERO 183 X 91.4 X 45.7 CM NEGRO" },
    {
      name: "Anemometro (instrumento cientifico)",
      description: "Anemómetro con 5 sensores y mástil (para dirección del viento, temperatura, humedad relativa, pluviosidad), función de alarma, puesto USB y software de análisis.",
    },
    {
      name: "Aparato medicion deformaciones modulo de concreto (aparato cientifico)",
      description: "Resipod Concrete Resistivity Meter",
    },
    { name: "Bomba centrifuga (equipo)", description: "bomba centrifuga de 5 hp trifásica" },
    { name: "Bomba hidraulica (equipo)", description: "bomba jet periférica de 1 /12 hp 110v" },
    { name: "Bomba sumergible (equipo)", description: "bomba sumergible tipo bala de 2 1/2 hp 220v" },
    {
      name: "Caladora",
      description: "sierra caladora industrial eléctrica 700w 120v velocidad variable de 500 a 3100 carreras/minutos",
    },
    {
      name: "Cámara infrarroja",
      description: "Cámara de imagen térmica infrarroja de alta resolución de 320 x 240 infrarrojos. Modelo HTI-19 con 300.000 píxeles mejorados, visualización a color nítida de 3.2 pulgadas.",
    },
    {
      name: "Computadora de Escritorio",
      description: "COMPUTADORA PORTATIL PROCESADOR INTEL I5 O EQUIVALENTE, DISCO DURO SSD 512 GB MEMORIA RAM 8 GB.",
    },
    {
      name: "Computadora de Escritorio",
      description: "Computadora all in one, color blanco, procesador AMD Ryzen 3 / 21.5 Pulgadas / 1tb de disco duro / 256gb SSD / 4gb RAM",
    },
    {
      name: "Computadora de Escritorio",
      description: "COMPUTADORA DE ESCRITORIO PROCESADOR INTEL i5 o EQUIVALENTE, UNIDAD DE ESTADO SÓLIDO DE 512 GB, MEMORIA 8 GB DE RAM DDR4-2666 MHz",
    },
    {
      name: "Computadora de Escritorio",
      description: "Computadora con procesador Ryzen 7 5800X, tarjeta gráfica RX 6600 XT 8GB, disco duro 1TB, disco de estado sólido 480GB M.2, memoria RAM 32GB DDR4, enfriamiento líquido 240mm, bluetooth, wifi.",
    },
    {
      name: "Computadora de Escritorio",
      description: "Procesador Ryzen 9 5900X; Tarjeta gráfica RTX 3080 10GB; Disco duro 1TB; Disco de estado sólido 480GB M.2; Memoria RAM; 32GB DDR4; Enfriamiento líquido 360mm; Bluetooth, w",
    },
    {
      name: "Computadora Portátil",
      description: "COMPUTADORA PORTATIL PROCESADOR INTEL i5 O EQUIVALENTE, DISCO DURO SSD 512 GB MEMORIA RAM 8 GB.",
    },
    { name: "Desbrozadora", description: "Desmalezadora a gasolina 63 cc mango tipo \"bici\", 17\" corte, 3HP" },
    {
      name: "Equipo aire acondicionado 12,000 BTU",
      description: "AIRE ACONDICIONADO 12OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO",
    },
    {
      name: "Equipo aire acondicionado 12,000 BTU",
      description: "Articulo de aire acondicionado tipo minisplit de 12000",
    },
    {
      name: "Equipo aire acondicionado 12,000 BTU",
      description: "AIRE ACONDICIONADO 12OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO, CONVENCIONAL",
    },
    { name: "Equipo aire acondicionado 12,000 BTU", description: "Equipo aire acondicionado 12,000 BTU" },
    {
      name: "Equipo aire acondicionado 18,000 BTU",
      description: "AIRE ACONDICIONADO 18OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO",
    },
    {
      name: "Equipo aire acondicionado 24,000 BTU",
      description: "AIRE ACONDICIONADO 24OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO",
    },
    { name: "Equipo aire acondicionado 24,000 BTU", description: "Articulo de enfriamiento, tipo mini Split de 24000" },
    {
      name: "Equipo aire acondicionado 24,000 BTU",
      description: "AIRE ACONDICIONADO 24OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO.",
    },
    {
      name: "Equipo aire acondicionado 36,000 BTU",
      description: "Aire acondicionado 36,000 BTU minisplit, con control remoto, únicamente frío",
    },
    {
      name: "Equipo aire acondicionado 36,000 BTU",
      description: "AIRE ACONDICIONADO 36OOO BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO",
    },
    { name: "Equipo aire acondicionado 36,000 BTU", description: "Equipo aire acondicionado 36,000 BTU" },
    {
      name: "Equipo aire acondicionado 36,000 BTU",
      description: "AIRE ACONDICIONADO 36000 BTU MINISPLIT, CON CONTROL REMOTO, ÚNICAMENTE AIRE FRÍO",
    },
    {
      name: "Equipo multifuncional (imprime, faxea, escanea y fotocopia) (eq. De computacion)",
      description: "Impresora multifunción blanco y negro Equipo multifunción blanco y negro compatible con tamaños Carta / A4 / Legal Copia, imprima, escanee.",
    },
    {
      name: "Equipo para monitoreo de aguas profundas",
      description: "Botella Van Dorn, con disparador accionado mediante mensajero. Incluyen 1 grifo en cada tapón para facilitar la extracción de la muestra. Con termómetro. Capacidad 2L. Fabricada en metacrilato, acetal y PVC.Incluye elementos metálicos en acero inoxidable AISI 316. Gomas de látex. Juntas tóricas NBR.",
    },
    {
      name: "Escalera tipo tijera",
      description: "ESCALERA DE TIJERA DE FIBRA DE VIDRIO 12 PIES 225 DE 11 peldaños con una capacidad de carga de 225 kg ideal para trabajos de uso industrial pesado",
    },
    {
      name: "Escritorio",
      description: "Mesa de trabajo (escritorio básico) Cubierta melamina 19 mm termofusionada en ambas caras. Estructura tubular de acero cal. 20 Terminada en pintura epóxica texturizada horneada. Alto: 75 cm Ancho: 120 cm Prof: 60 cm\"",
    },
    { name: "Gabinete llaves", description: "GABINETE METÁLICO CON 2 PUERTAS Y CERERADURA CON 5 ENTREPAÑOS" },
    { name: "Gabinete para archivo", description: "Gabinete metálico con 2 puertas y cerradura con 5 entrepaños." },
    { name: "Gabinete universal", description: "GABINETE METÁLICO CON 2 PUERTAS Y CERERADURA CON 5 ENTREPAÑOS" },
    { name: "Hidrolavadora de alta presion", description: "\"HIDROLAVADORA ELÉCTRICA A PRESIÓN DE 2000 PSI de" },
    { name: "Impresora (eq. De computacion)", description: " 120 volts con 13 amperes\"" },
    {
      name: "Impresora inyeccion de tinta (eq. de computacion)",
      description: "IMPRESORA LASER MONOCROMÁTICA VELOCIDAD DE IMPRESIÓN HATA 42PPM, A DOBLE CARA HASTA 36 PPM, CONECTIVIDAD 1 USB 2.0 DE ALTA VELOCIDAD 1 ISB INTEGRADO EN EL LADO TRASERO, RED GIGABIT ETHERNET 10/100/1000BASE-T",
    },
    {
      name: "Impresora laser (eq. De computacion)",
      description: "IMPRESORA LASER MONOCROMÁTICA VELOCIDAD DE IMPRESIÓN HATA 42PPM, A DOBLE CARA HASTA 36 PPM, CONECTIVIDAD 1 USB 2.0 DE ALTA VELOCIDAD 1 ISB INTEGRADO EN EL LADO TRASERO, RED GIGABIT ETHERNET 10/100/1000BASE-T",
    },
    {
      name: "Impresora laser (eq. De computacion)",
      description: "IMPRESORA LASER , VELOCIDAD DE IMPRESIÓN HASTA 65PPM, CONECTIVIDAD 1 USB 2.0 DE ALTA VELOCIDAD 1 ISB INTEGRADO EN EL LADO TRASERO, RED GIGABIT ETHERNET 10/100/1000BASE-T, IMPRESIÓN A DOBLE CARA Y CAPACIDAD DE 1200 HOJAS",
    },
    {
      name: "Medidor de intensidad de luz uv (instrumento cientifico)",
      description: "IMPRESORA / LÁSER / BLANCO Y NEGRO / WIFI / USB, HASTA 20 PPM, TAMAÑO DE PAPEL ADMITIDO DE 76 X 127 A 216 X 356 MM, OPCIÓN DE IMPRESIÓN A DOBLE CARA, PANTALLA LED, CAPACIDAD DE BANDEJA DE PAPEL 150 HOJAS, PANTALLA LED.",
    },
    {
      name: "Medidor de parametros multiples de laboratorio (instrumento cientifico)",
      description: "Luxómetro con Temporizador y Conexión USB . Medidor de luz (luxómetro) con rango de 20 a 200,000lux, con conexión USB y \"Timer\"",
    },
    {
      name: "Mesa",
      description: "Medidor portátil de pH, conductividad eléctrica y temperatura directo en suelo. Diseñado para el análisis específico de suelos. La sonda especializada cuenta con una punta cónica, diseño de unión abierta y un cuerpo de vidrio haciéndolo ideal para la medición directa de pH en suelo o después de la preparación de un lodo de suelo con agua desionizada. Exactitud ±0.02 pH. Incluye una barren plástica para hacer espacio en suelos rígidos. Diseño específico para la medición directa de pH en suelo.",
    },
    {
      name: "Mezcladora de audio",
      description: "Mesa Plegable Altura Ajustable 61x121.9 cm, 4 ajustes de altura, Plegado tipo portafolio, asa de transporte, marco de acero resistente al oxido, Parte superior de polietileno de alta densidad (HDPE) con protección UV, resistente a las manchas y fácil de limpiar",
    },
    { name: "Micrófono de Mesa", description: "mezcladora de audio de 10 canales" },
    { name: "Micrófono inalámbrico", description: "micrófono inalámbrico de cuello de ganzo" },
    { name: "Motosierra", description: "micrófono inalámbrico doble sistema" },
    {
      name: "Mufla de Calcinación",
      description: "MOTOSIERRA DE GASOLINA 16 MS 170 CADENA OILOMATIC, MANDO UNIFICADO,SISTEMA ANTIVIBRACIÓN",
    },
    {
      name: "Multimetro (instrumento cientifico)",
      description: "ECO-7L Mufla con fibra de cerámica, con capacidad de 7 litros, intervalo de temperatura 100-1200 oC, /- 1oC, Dimensiones internas 200x785X640 mm, peso bruto 50kg, potencia 3kw, alimentación CA 110-240V,50/60 hZ.",
    },
    { name: "Nivel láser", description: "multimetro digital de gancho con capacidad de ca 600v y 600 amp." },
    {
      name: "No-break (eq. De computacion)",
      description: "Nivel láser, área de trabajo con receptor valor 120 m. Precisión 0,3 mm/m. Proyección Línea 3 x 360°.Diodo láser Línea: 630 - 650 Nm, < 10 mW. Temperatura de servicio -10 ? 40 °C. Temperatura de almacenamiento -20 ? 70 °C. Clase de láser 2. Alcance con receptor hasta 120 m. Alcance sin receptor hasta 30 m. Intervalo de autonivelación ± 4°. Tiempo de nivelación 4 s. Protección contra polvo y salpicaduras de agua IP 54. Fuente de alimentación 4 x 1,5 V LR6 (AA). Tiempo de funcionamiento (máx.) 4 h (en modo de 3 líneas). Rosca del trípode 1/4\", 5/8\". ",
    },
    {
      name: "No-break (eq. De computacion)",
      description: "Ups Nobreak Va/900 Watts Smart1500lcdt Fr-883. Capacidad de potencia de salida (VA) 1500 VA, Potencia de salida 900 W, Voltaje de entrada de operación (min) 120 V Voltaje de entrada de operación (max) 120 V, Voltaje de operación de salida (min) 120V, Voltaje de operación de salida (max) 24 V Fuente de alimentación, frecuencia de entrada 50/60, Índice de aumento de energía 650 J,Eficiencia 95%. Certificación UL1778, CSA, NOM, FCC-15 A (EMI) BATERÍA.",
    },
    {
      name: "Nucleador para obtencion de muestras de sedimentos marinos",
      description: "Ups Nobreak Va/900 Watts Smart1500lcdt Fr-883. Capacidad de potencia de salida (VA) 1500 VA, Potencia de salida 900 W, Voltaje de entrada de operación (min) 120 V Voltaje de entrada de operación (max) 120 ",
    },
    {
      name: "(aparato cientifico)",
      description: "MUESTREADOR D/SEDIMENTOS RUSSIAN (25030). Equipo especializado tipo ruso para la extracción de sedimento marino y lacustre, con aplicación para análisis de metales pesados, biodiversidad edáfica, caracterización sedimentológica, carbón azul, entre otros. Cuchilla de 50cm X 5.4 cm OD; 2.0mm de grosos, pieza T en aluminio, dos extensiones de aluminio (1.00 x 1.9cm de diámetro), y caja de transporte. ",
    },
    { name: "Pizarrones y rotafolios", description: "Pizarrón blanco 90 x 120 cm" },
    { name: "Podadora", description: "PODADORA 21 CORTE DESCARGA LATERAL 6LB.PIE. LLANTAS 7 /12 6 POSICIONES" },
    { name: "Prensa mordaza (herramienta)", description: "PRENSA DE BANCO CONTROLADA BAJO TORNILLO PARA SUJECIÓN" },
    {
      name: "Probador resistencias (eq. Electrico)",
      description: "Probador de Rigidez Dieléctrica para Aceite Aislante totalmente automático de 100 kV marca BAUR, modelo DTA100C. Cat. 415 043.",
    },
    {
      name: "Receptor para microfono (eq. De com., cinemat. O fotograf.)",
      description: "receptor para micrófono inalámbrico",
    },
    {
      name: "Registrador climatológico para medición de temperatura y húmeda",
      description: "Registrador climatológico con indicación de estado a través de LED. Memoria para 32.000 valores. Interfaz USB. Software para el análisis de datos. Incluye soporte mural. Ajuste de la fecha y hora. Ajuste de la cuota de registro (2 s a 24 h). Pila de litio de larga duración. Memoria EEPROM no volátil. Indicación de estado por LED (alarma incluida). Ajuste de los valores límite de alarma.",
    },
    {
      name: "Regulador corriente, voltaje y de tension (eq. Electrico)",
      description: "Regulador de voltaje 200VA/ 1800 Watts C/prot/linea 4 cont.",
    },
    {
      name: "Regulador corriente, voltaje y de tension (eq. Electrico)",
      description: "REGULADOR DE VOLTAJE 2000VA / 1800 WATTS C/PROT/LINEA 4 CONT",
    },
    {
      name: "Regulador corriente, voltaje y de tension (eq. Electrico)",
      description: "Regulador 2500VA/2000W con 6 contactos, supresor de picos, fusible de extra protección, con sistema de desconexión automática",
    },
    {
      name: "Restirador",
      description: "Restirador de madera de 70cm x100cm con base de metal para ser utilizados en la elaboración de planos.",
    },
    {
      name: "Scanner (eq. De computacion)",
      description: "Escáner plano HP ScanJet Pro 2500 f1 (L2747A) Cama plana, alimentador automático de documentos (ADF) Resolución de escaneo, óptica: Hasta 600 dpi (color y monocromática, ADF); Hasta 1200 dpi (color y monocromática, cama plana) Carta; Legal; Ejecutivo; A4; A5; A6; B5; B5 (JIS) USB 2.0 Escáner plano HP ScanJet Pro 2500 f1 (L2747A) Cama plana, alimentador automático de documentos (ADF) Resolución de escaneo, óptica: Hasta 600 dpi (color y monocromática, ADF); Hasta 1200 dpi (color y monocromática, cama plana) Carta; Legal; Ejecutivo; A4; A5; A6; B5; B5 (JIS) USB 2.0 Ciclo de trabajo diario recomendado: 1500 páginas (ADF) CMOS CIS (sensor de imagen de contacto)",
    },
    { name: "Sierra circular", description: "sierra circular eléctrica 1400 w 127v 184mm con disco de 7 1/4 pulgadas" },
    { name: "Silla", description: "SILLA ACOJINADA DE VISITA SIN BRAZOS, TAPIZADA EN TELA, CON ESTRUCTURA METÁLICA" },
    {
      name: "Silla Ejectuvia",
      description: "SILLA SECRETARIAL CON SISTEMA DE ELEVACIÓN POR MEDIO DE PISTÓN NEUMÁTICO, BASE REFORZADA DE 5 PUNTAS CON RUEDAS",
    },
    {
      name: "Silla Ejectuvia",
      description: "SILLA SECRETARIAL CON SISTEMA DE ELEVACIÓN POR MEDIO DE PISTON NEUMÁTICO, BASE REFORZADA DE 5 PUNTAS CON RUEDAS",
    },
    {
      name: "Silla Ejectuvia",
      description: "SILLA SECRETARIAL CON SISTEMA DE ELEVACIÓN POR MEDIO DE PISTON NEUMÁTICO, BASE REFORZADA DE 5 PUNTAS CON RUEDAS.",
    },
    {
      name: "Silla giratoria",
      description: "Silla secretarial con sistema de elevación por medio de pistón neumático, base reforzada de 5 puntas con ruedas",
    },
    {
      name: "Silla ruedas (equipo medico quirurgico)",
      description: "SILLA DE RUEDAS PELGABLE CON SEGURO EN LLANTAS, MANERALES RECUERTOS DE HULE, ASIENTO DE TELA",
    },
    { name: "Sillon", description: "SILLON SEMIEJECUTIVO CON BASE DE 5 PUNTAS, AJUSTE DE ALTURA, DESCANSABRAZOS" },
    { name: "Sillón", description: "Sillón Ejecutivo para Escritorio polipiel/ Poliuretano negro" },
    { name: "Sillón", description: "SILLÓN SEMIEJECUTIVO CON BASE DE 5 PUNTAS, AJUSTE DE ALTURA" },
    {
      name: "Sonometro (instrumento cientifico)",
      description: "Sonometro clase II con registro de datos. Interfaz USB. Rango:30 a 130 dB. Pantalla LCD. Software descargable. Memoria para 32700 valores.",
    },
    {
      name: "Soporte universal para tv, videograbadora, etc. (pared o techo)",
      description: "Soporte universal para 1 monitor (30 pulgadas) y 1 portátil de hasta 16,6 pulgadas. Soporta 1 monitor de hasta 9 kg y 1 portátil de hasta 8 kg. Tamaño plataforma para portátil de 30 cm de profundidad y ancho regulable entre 24 y 42 centimetros. Sistema de cableado interno por el soporte. Topes inferiores de seguridad evita que su portátil se deslice.Cumple VESA 75×75 y 100×100. Altura ajustable máxima de 50 cms al centro de las pantallas. Extensión máxima hacia el frente: 53 cm Inclinación regulable entre -15° y 15°. Instalable en escritorios desde 1 cm hasta 9 cms de grosor (sistema de prensa o grommet) Fabricado en acero y aluminio. ",
    },
    {
      name: "Switch 24 puertos",
      description: "4 switch de 24 puertos rj45 poe, administrados y administrables vía remota con firewall forti 600d y 4 puertos para fibra óptica.",
    },
    {
      name: "Taladro (para madera, metal, piedra y plastico)",
      description: "TALADRO PERCUTOR/ATORNILLADOR DEWALT 1-1/4 DE PULGADA INALÁMBRICO",
    },
    {
      name: "Taladro (para madera, metal, piedra y plastico)",
      description: "taladro rotomartillo inalámbrico destornillador batería recargable de 20v velocidad de 500 a 1700 rpm mandril de 1/2",
    },
    {
      name: "Taladro electrico (madera, metal, piedra y plastico)",
      description: "taladro rotomartillo alámbrico de 1/2 pulgada de 710 w",
    },
    {
      name: "Termometro infrarrojo (mide temperaturas por señal infrarroja) (instrumento cientifico)",
      description: "Termómetro infrarrojo tipo pistola de alto rendimiento. Repetibilidad: ±(1% lectura 1 dígito). Resolución: 1 °C o 1 °F. Tiempo de respuesta: 100 mseg. Respuesta espectral: 8 a 14 micras. Emisividad: 0,10 a 1,00 en incrementos de 0,01. Rango de temperatura ambiente: 0 a 50 °C (32 a 122 °F). Alimentación: 4 pilas de litio \"AA\" (incluidas) o adaptador CA opcional. Vida útil de la pila: pila alcalina: 80 horas; litio: 14 días (sin vista de láser). Salida analógica: 1 mV/°C o 1 mV/°F. Montaje de trípode: ¼\" a 20 UNC. Pantalla: LCD con retroalimentación, muestra temperatura actual y mín./máx., diferencial y media de forma simultánea.",
    },
    {
      name: "Todo tipo de software (paqueteria) (suministros informaticos)",
      description: "Software especializado para el análisis y obtención de datos meteorológicos, aerosoles y de radiación, con acceso a bases de datos a nivel mundial de series temporales, para la simulación con aplicaciones diversas (Meteonorm 8). 2. Análisis ecológicos (CANOCO for Windwos)",
    },
    { name: "Tripie para microfono", description: "tripie para micrófono con brazo extensible" },
    {
      name: "Video-proyector multimedia (cañon) (eq. De computacion)",
      description: "Videoproyector. Resolución XGA, Número de Pixeles:480.000 pixeles (1024 x 768) x 3600 lumnes, conectividad entrada ordenador múltiples puertos como HDMI, VGA, USB B y USB A",
    },
    {
      name: "Video-proyector multimedia (cañon) (eq. De computacion)",
      description: "Videoproyector. Tecnología de proyección: DLP, Resolución: XGA (1024x768), Brillo de proyector: 3600 lúmenes ANSI, conectividad entrada ordenador múltiples puertos como HDMI, VGA, USB B y USB A.",
    },
    {
      name: "Video-proyector multimedia (cañon) (eq. De computacion)",
      description: "Video proyector para impartir docencia.",
    },
    {
      name: "Video-proyector multimedia (cañon) (eq. De computacion)",
      description: "Proyector portátil / Aporta imágens de hasta 300 pulgadas / Cuenta con 3000 lúmenes a color y en blanco / Resolución WXGA (1280 x 800p.) / Tecnología avanzada 3LCD de 3 chips / Cuenta con 1 HDMI (HDCP 1.4); 1 USB tipo B y 1 conector USB tipo A (PC free, Módulo Inalámbrico, DC Outy 5V/2A)",
    },
    {
      name: "Video-proyector multimedia (cañon) (eq. De computacion)",
      description: "Sistema de Proyección: 3LCD de 3 chips Proyección: Frontal / Posterior / Techo Método de visualización: Matriz activa de polisilicio TFT Luminosidad en Color: 3,400 Lúmenes Tipo de Lámpara: 210W UHE Relación de Proyección: 1.44 (Zoom: Wide), 1.95 (Zoom: Tele)",
    },
  ],
}

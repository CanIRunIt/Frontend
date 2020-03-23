/* eslint-disable */
import React,{ Component } from 'react';
import axios from 'axios';
import Rigscore from '../rigscore/rigscore';
import Select from 'react-select';
import GamerigScore from '../gamerigscore/gamerigscore';
import { connect } from 'react-redux';


const gpus = [
    {value:'Quadro GV100', label:'Quadro GV100'},{value:'GeForce GTX 1080 Ti', label:'GeForce GTX 1080 Ti'},
    {value:'NVIDIA TITAN X', label:'NVIDIA TITAN X'},{value:'NVIDIA TITAN Xp', label:'NVIDIA TITAN Xp'},
    {value:'TITAN Xp COLLECTORS EDITION', label:'TITAN Xp COLLECTORS EDITION'},
    {value:'TITAN V', label:'TITAN V'},{value:'GeForce RTX 2080 Ti', label:'GeForce RTX 2080 Ti'},
    {value:'Quadro RTX 6000', label:'Quadro RTX 6000'},{value:'TITAN RTX', label:'TITAN RTX'},
    {value:'Quadro P6000', label:'Quadro P6000'},{value:'Quadro RTX 8000', label:'Quadro RTX 8000'},{value:'Radeon RX 5700 XT', label:'Radeon RX 5700 XT'},{value:'Radeon RX 5700 XT 50th Anniversary', label:'Radeon RX 5700 XT 50th Anniversary'},{value:'GeForce GTX 1080', label:'GeForce GTX 1080'},{value:'GeForce RTX 2080 SUPER', label:'GeForce RTX 2080 SUPER'},{value:'Radeon VII', label:'Radeon VII'},{value:'Radeon Pro Vega II', label:'Radeon Pro Vega II'},{value:'GeForce RTX 2080', label:'GeForce RTX 2080'},{value:'Quadro GP100', label:'Quadro GP100'},{value:'GeForce GTX 1070 Ti', label:'GeForce GTX 1070 Ti'},{value:'Radeon Pro W5700', label:'Radeon Pro W5700'},{value:'Quadro RTX 5000', label:'Quadro RTX 5000'},{value:'Radeon RX 5700', label:'Radeon RX 5700'},{value:'GeForce RTX 2070 SUPER', label:'GeForce RTX 2070 SUPER'},{value:'GeForce RTX 2080 (Mobile)', label:'GeForce RTX 2080 (Mobile)'},{value:'Radeon RX Vega 64', label:'Radeon RX Vega 64'},{value:'Radeon Pro Vega 64', label:'Radeon Pro Vega 64'},{value:'Tesla V100-SXM2-16GB', label:'Tesla V100-SXM2-16GB'},{value:'GeForce RTX 2070', label:'GeForce RTX 2070'},{value:'GeForce GTX 1070', label:'GeForce GTX 1070'},{value:'Quadro P5000', label:'Quadro P5000'},{value:'Radeon Vega Frontier Edition', label:'Radeon Vega Frontier Edition'},{value:'Radeon RX Vega 56', label:'Radeon RX Vega 56'},{value:'GeForce RTX 2060 SUPER', label:'GeForce RTX 2060 SUPER'},{value:'Radeon Pro WX 9100', label:'Radeon Pro WX 9100'},{value:'Radeon RX 5600 XT', label:'Radeon RX 5600 XT'},{value:'GeForce GTX 980 Ti', label:'GeForce GTX 980 Ti'},{value:'Radeon PRO WX 8200', label:'Radeon PRO WX 8200'},{value:'Quadro P5200', label:'Quadro P5200'},{value:'Radeon Pro Vega 56', label:'Radeon Pro Vega 56'},{value:'GeForce GTX TITAN X', label:'GeForce GTX TITAN X'},{value:'GeForce RTX 2080 with Max-Q Design', label:'GeForce RTX 2080 with Max-Q Design'},{value:'Quadro RTX 5000 (Mobile)', label:'Quadro RTX 5000 (Mobile)'},{value:'GeForce RTX 2060', label:'GeForce RTX 2060'},{value:'GeForce RTX 2070 (Mobile)', label:'GeForce RTX 2070 (Mobile)'},{value:'GeForce GTX 1070 (Mobile)', label:'GeForce GTX 1070 (Mobile)'},{value:'Quadro RTX 4000', label:'Quadro RTX 4000'},{value:'GeForce GTX 1080 with Max-Q Design', label:'GeForce GTX 1080 with Max-Q Design'},{value:'Radeon Pro Vega 48', label:'Radeon Pro Vega 48'},{value:'Quadro M6000', label:'Quadro M6000'},{value:'Quadro P4000', label:'Quadro P4000'},{value:'Radeon RX 5500', label:'Radeon RX 5500'},{value:'Quadro P4200', label:'Quadro P4200'},{value:'GeForce RTX 2060 (Mobile)', label:'GeForce RTX 2060 (Mobile)'},{value:'Quadro M6000 24GB', label:'Quadro M6000 24GB'},{value:'GeForce GTX 1660 Ti', label:'GeForce GTX 1660 Ti'},{value:'Quadro P3200 with Max-Q Design', label:'Quadro P3200 with Max-Q Design'},{value:'GeForce RTX 2070 with Max-Q Design', label:'GeForce RTX 2070 with Max-Q Design'},{value:'Radeon Pro Duo', label:'Radeon Pro Duo'},{value:'GeForce GTX 1660 Ti (Mobile)', label:'GeForce GTX 1660 Ti (Mobile)'},{value:'Tesla P100-PCIE-16GB', label:'Tesla P100-PCIE-16GB'},{value:'Radeon Pro W5500', label:'Radeon Pro W5500'},{value:'GeForce GTX 980', label:'GeForce GTX 980'},{value:'GeForce GTX 1660 SUPER', label:'GeForce GTX 1660 SUPER'},{value:'Quadro P4200 with Max-Q Design', label:'Quadro P4200 with Max-Q Design'},{value:'Radeon RX 5500 XT', label:'Radeon RX 5500 XT'},{value:'Radeon R9 Fury', label:'Radeon R9 Fury'},{value:'GeForce GTX 1660', label:'GeForce GTX 1660'},{value:'GeForce GTX 1060', label:'GeForce GTX 1060'},{value:'Radeon R9 Fury + Fury X', label:'Radeon R9 Fury + Fury X'},{value:'Radeon RX 590', label:'Radeon RX 590'},{value:'GeForce GTX 1070 with Max-Q Design', label:'GeForce GTX 1070 with Max-Q Design'},{value:'GeForce GTX 1650 SUPER', label:'GeForce GTX 1650 SUPER'},{value:'Quadro P5200 with Max-Q Design', label:'Quadro P5200 with Max-Q Design'},{value:'GeForce GTX 780 Ti', label:'GeForce GTX 780 Ti'},{value:'Quadro RTX 3000', label:'Quadro RTX 3000'},{value:'GeForce GTX 1060 3GB', label:'GeForce GTX 1060 3GB'},
    {value:'Quadro P3200', label:'Quadro P3200'},{value:'Quadro P2200', label:'Quadro P2200'},{value:'GeForce GTX TITAN Black', label:'GeForce GTX TITAN Black'},{value:'GeForce GTX 970', label:'GeForce GTX 970'},{value:'Radeon Pro SSG', label:'Radeon Pro SSG'},{value:'Radeon RX 480', label:'Radeon RX 480'},{value:'GeForce GTX 1060 (Mobile)', label:'GeForce GTX 1060 (Mobile)'},{value:'Radeon RX 580', label:'Radeon RX 580'},{value:'Radeon R9 390X', label:'Radeon R9 390X'},{value:'Quadro M5000', label:'Quadro M5000'},{value:'Radeon Pro 580', label:'Radeon Pro 580'},{value:'GeForce GTX Titan', label:'GeForce GTX Titan'},{value:'GeForce GTX 1650 (Mobile)', label:'GeForce GTX 1650 (Mobile)'},{value:'Intel Iris Plus 645', label:'Intel Iris Plus 645'},{value:'Radeon Pro 5500M', label:'Radeon Pro 5500M'},{value:'Radeon Pro WX 7100', label:'Radeon Pro WX 7100'},{value:'Radeon R9 390', label:'Radeon R9 390'},{value:'GeForce GTX 780', label:'GeForce GTX 780'},{value:'Quadro K6000', label:'Quadro K6000'},{value:'GeForce GTX 1060 with Max-Q Design', label:'GeForce GTX 1060 with Max-Q Design'},{value:'Radeon RX 470', label:'Radeon RX 470'},{value:'Quadro M5500', label:'Quadro M5500'},{value:'Radeon RX 580 2048SP', label:'Radeon RX 580 2048SP'},{value:'Radeon Pro 580X', label:'Radeon Pro 580X'},{value:'GeForce GTX 1650', label:'GeForce GTX 1650'},{value:'Radeon RX 580X', label:'Radeon RX 580X'},{value:'Quadro T2000', label:'Quadro T2000'},{value:'Quadro P2000', label:'Quadro P2000'},{value:'Radeon R9 280X', label:'Radeon R9 280X'},{value:'Radeon R9 290X / 390X', label:'Radeon R9 290X / 390X'},{value:'Radeon R9 295X2', label:'Radeon R9 295X2'},{value:'GeForce GTX 980M', label:'GeForce GTX 980M'},{value:'Radeon Pro 5300M', label:'Radeon Pro 5300M'},{value:'Tesla M60', label:'Tesla M60'},{value:'GeForce GTX TITAN Z', label:'GeForce GTX TITAN Z'},{value:'Quadro M5000M', label:'Quadro M5000M'},{value:'GeForce GTX 1050 Ti with Max-Q Design', label:'GeForce GTX 1050 Ti with Max-Q Design'},{value:'Radeon RX Vega M GH', label:'Radeon RX Vega M GH'},{value:'GeForce GTX 1050 Ti (Mobile)', label:'GeForce GTX 1050 Ti (Mobile)'},{value:'Radeon RX 570', label:'Radeon RX 570'},{value:'Radeon R9 290 / 390', label:'Radeon R9 290 / 390'},{value:'FirePro W9000', label:'FirePro W9000'},{value:'Radeon Instinct MI25 MxGPU', label:'Radeon Instinct MI25 MxGPU'},{value:'Q12U-1', label:'Q12U-1'},{value:'Quadro T1000', label:'Quadro T1000'},{value:'Quadro P3000', label:'Quadro P3000'},{value:'GeForce GTX 1050 Ti', label:'GeForce GTX 1050 Ti'},{value:'Radeon R9 280', label:'Radeon R9 280'},{value:'Radeon HD 7970 / R9 280X', label:'Radeon HD 7970 / R9 280X'},{value:'GeForce GTX 770', label:'GeForce GTX 770'},{value:'GeForce GTX 1060 5GB', label:'GeForce GTX 1060 5GB'},{value:'Radeon R9 380X', label:'Radeon R9 380X'},{value:'GeForce GTX 960', label:'GeForce GTX 960'},{value:'FirePro W8100 Graphic Adapter', label:'FirePro W8100 Graphic Adapter'},{value:'GeForce GTX 1050 with Max-Q Design', label:'GeForce GTX 1050 with Max-Q Design'},{value:'Radeon Pro WX4100', label:'Radeon Pro WX4100'},{value:'Quadro P2000 with Max-Q Design', label:'Quadro P2000 with Max-Q Design'},{value:'FirePro W9100', label:'FirePro W9100'},{value:'Radeon Pro Vega 20', label:'Radeon Pro Vega 20'},{value:'Radeon Pro 570', label:'Radeon Pro 570'},{value:'Radeon R9 380', label:'Radeon R9 380'},{value:'GeForce GTX 680', label:'GeForce GTX 680'},{value:'GeForce GTX 760 Ti OEM', label:'GeForce GTX 760 Ti OEM'},{value:'Radeon HD 7990', label:'Radeon HD 7990'},{value:'Radeon Pro WX 5100', label:'Radeon Pro WX 5100'},{value:'GRID M60-2B', label:'GRID M60-2B'},{value:'Quadro K5200', label:'Quadro K5200'},{value:'FirePro W8000', label:'FirePro W8000'},{value:'GeForce GTX 1050', label:'GeForce GTX 1050'},{value:'Radeon HD 8990', label:'Radeon HD 8990'},{value:'GeForce GTX 970M', label:'GeForce GTX 970M'},{value:'Radeon Sky 500', label:'Radeon Sky 500'},{value:'GeForce GTX 1050 (Mobile)', label:'GeForce GTX 1050 (Mobile)'},{value:'EIZO Quadro MED-XN51LP', label:'EIZO Quadro MED-XN51LP'},{value:'FirePro W7100 Adapter', label:'FirePro W7100 Adapter'},{value:'Quadro M4000', label:'Quadro M4000'},{value:'Radeon HD 7950 / R9 280', label:'Radeon HD 7950 / R9 280'},{value:'FirePro W8100', label:'FirePro W8100'},{value:'Quadro M4000M', label:'Quadro M4000M'},{value:'GeForce GTX 760 Ti', label:'GeForce GTX 760 Ti'},{value:'FirePro W8000 Adapter', label:'FirePro W8000 Adapter'},{value:'Barco MXRT 7600', label:'Barco MXRT 7600'},{value:'Radeon RX Vega M GL', label:'Radeon RX Vega M GL'},{value:'Radeon RX 560X', label:'Radeon RX 560X'},{value:'Radeon R7 370', label:'Radeon R7 370'},{value:'GeForce GTX 670', label:'GeForce GTX 670'},{value:'FirePro W7100', label:'FirePro W7100'},{value:'Radeon R9 M395X', label:'Radeon R9 M395X'},{value:'Radeon Pro 570X', label:'Radeon Pro 570X'},{value:'Radeon R9 270X', label:'Radeon R9 270X'},{value:'GeForce GTX 660 Ti', label:'GeForce GTX 660 Ti'},{value:'Radeon Pro 465', label:'Radeon Pro 465'},{value:'GeForce GTX 950', label:'GeForce GTX 950'},{value:'Radeon Pro Vega 16', label:'Radeon Pro Vega 16'},{value:'GeForce GTX 690', label:'GeForce GTX 690'},{value:'Radeon Pro WX 4100', label:'Radeon Pro WX 4100'},{value:'FirePro S9000', label:'FirePro S9000'},{value:'GRID M60-8A', label:'GRID M60-8A'},{value:'Radeon HD 7870 XT', label:'Radeon HD 7870 XT'},{value:'Quadro P1000', label:'Quadro P1000'},{value:'Radeon R9 M390X', label:'Radeon R9 M390X'},{value:'Radeon RX 460', label:'Radeon RX 460'},{value:'Barco MXRT 7500', label:'Barco MXRT 7500'},{value:'Radeon R9 285 / 380', label:'Radeon R9 285 / 380'},{value:'Quadro M3000M', label:'Quadro M3000M'},{value:'FirePro W7000', label:'FirePro W7000'},{value:'GeForce GTX 760', label:'GeForce GTX 760'},{value:'Radeon HD 7870', label:'Radeon HD 7870'},{value:'Radeon RX 560', label:'Radeon RX 560'},{value:'GRID P6-4Q', label:'GRID P6-4Q'},{value:'GeForce GTX 880M', label:'GeForce GTX 880M'},{value:'GRID K2', label:'GRID K2'},{value:'FirePro W7170M', label:'FirePro W7170M'},{value:'GeForce GTX 680M KY_Bullet Edition', label:'GeForce GTX 680M KY_Bullet Edition'},{value:'Radeon Pro WX 4150', label:'Radeon Pro WX 4150'},{value:'FirePro M6100 FireGL V', label:'FirePro M6100 FireGL V'},{value:'Radeon R9 M290X', label:'Radeon R9 M290X'},{value:'Radeon R9 M470X', label:'Radeon R9 M470X'},{value:'Quadro M2200', label:'Quadro M2200'},{value:'Quadro M2000', label:'Quadro M2000'},{value:'FirePro W7000 Adapter', label:'FirePro W7000 Adapter'},
    {value:'Radeon R9 M395', label:'Radeon R9 M395'},{value:'GeForce GTX 780M', label:'GeForce GTX 780M'},{value:'Radeon R9 270 / R7 370', label:'Radeon R9 270 / R7 370'},{value:'FirePro S7000', label:'FirePro S7000'},{value:'RadeonT R7 450', label:'RadeonT R7 450'},{value:'Radeon R9 370', label:'Radeon R9 370'},{value:'GeForce GTX 965M', label:'GeForce GTX 965M'},{value:'GeForce GTX 870M', label:'GeForce GTX 870M'},{value:'NVS 315', label:'NVS 315'},{value:'GeForce GTX 775M', label:'GeForce GTX 775M'},{value:'Quadro P620', label:'Quadro P620'},{value:'Quadro K4200', label:'Quadro K4200'},{value:'Quadro K5100M', label:'Quadro K5100M'},{value:'Radeon R9 M295X', label:'Radeon R9 M295X'},{value:'Radeon RX Vega 11', label:'Radeon RX Vega 11'},{value:'Radeon HD8970M', label:'Radeon HD8970M'},{value:'GeForce GTX 660', label:'GeForce GTX 660'},{value:'GeForce GTX 960A', label:'GeForce GTX 960A'},{value:'Radeon RX Vega 11 PRD', label:'Radeon RX Vega 11 PRD'},{value:'Radeon HD 7970M', label:'Radeon HD 7970M'},{value:'Radeon Pro WX 3100', label:'Radeon Pro WX 3100'},{value:'GeForce GTX 680MX', label:'GeForce GTX 680MX'},{value:'GRID K520', label:'GRID K520'},{value:'Quadro K5000', label:'Quadro K5000'},{value:'Quadro K2200M', label:'Quadro K2200M'},{value:'GeForce GTX 750 Ti', label:'GeForce GTX 750 Ti'},{value:'Radeon HD 7850', label:'Radeon HD 7850'},{value:'GeForce GTX 580', label:'GeForce GTX 580'},{value:'Radeon HD 8970M', label:'Radeon HD 8970M'},{value:'FirePro V7000 Adapter', label:'FirePro V7000 Adapter'},{value:'GeForce GTX 675MX', label:'GeForce GTX 675MX'},{value:'Quadro P600', label:'Quadro P600'},{value:'Radeon Pro 560X', label:'Radeon Pro 560X'},{value:'Radeon R7 360', label:'Radeon R7 360'},{value:'Quadro M2000M', label:'Quadro M2000M'},{value:'Radeon Pro WX 4130', label:'Radeon Pro WX 4130'},{value:'Radeon Pro 460', label:'Radeon Pro 460'},{value:'Radeon HD 8950', label:'Radeon HD 8950'},{value:'Radeon HD 7800-serie', label:'Radeon HD 7800-serie'},{value:'Quadro K2200', label:'Quadro K2200'},{value:'GeForce GTX 680M', label:'GeForce GTX 680M'},{value:'FirePro W4300', label:'FirePro W4300'},{value:'Radeon R7 260X', label:'Radeon R7 260X'},{value:'Radeon Pro 560', label:'Radeon Pro 560'},{value:'Radeon R9 M380', label:'Radeon R9 M380'},{value:'FirePro W5100', label:'FirePro W5100'},{value:'Radeon R9 260', label:'Radeon R9 260'},{value:'Radeon RX 550', label:'Radeon RX 550'},{value:'Radeon E8870PCIe', label:'Radeon E8870PCIe'},{value:'GeForce GT 1030', label:'GeForce GT 1030'},{value:'Quadro M1200', label:'Quadro M1200'},{value:'GeForce GTX 570', label:'GeForce GTX 570'},{value:'Matrox C680 PCIe x16', label:'Matrox C680 PCIe x16'},{value:'GeForce GTX 650 Ti BOOST', label:'GeForce GTX 650 Ti BOOST'},{value:'Radeon HD 7790', label:'Radeon HD 7790'},{value:'GRID K220Q', label:'GRID K220Q'},{value:'FirePro M6100', label:'FirePro M6100'},{value:'FirePro M5100', label:'FirePro M5100'},{value:'GRID P4-2Q', label:'GRID P4-2Q'},{value:'FirePro V9800 Adapter', label:'FirePro V9800 Adapter'},{value:'Quadro M620', label:'Quadro M620'},{value:'GeForce GTX 480', label:'GeForce GTX 480'},{value:'GeForce GTX 750', label:'GeForce GTX 750'},{value:'Radeon R9 M375X', label:'Radeon R9 M375X'},{value:'Quadro K4100M', label:'Quadro K4100M'},{value:'Radeon Pro WX 2100', label:'Radeon Pro WX 2100'},{value:'Radeon R7 450', label:'Radeon R7 450'},{value:'Quadro M1000M', label:'Quadro M1000M'},{value:'Radeon Vega 11', label:'Radeon Vega 11'},{value:'GeForce GTX 770M', label:'GeForce GTX 770M'},{value:'MxGPU', label:'MxGPU'},{value:'Quadro K1200', label:'Quadro K1200'},{value:'Quadro 7000', label:'Quadro 7000'},{value:'GeForce GTX 860M', label:'GeForce GTX 860M'},{value:'FirePro W5000', label:'FirePro W5000'},{value:'Firepro W5170M', label:'Firepro W5170M'},{value:'GeForce GTX 560 Ti', label:'GeForce GTX 560 Ti'},{value:'Intel Iris Pro P580', label:'Intel Iris Pro P580'},{value:'B8DKMDAP', label:'B8DKMDAP'},{value:'GeForce 8800 GTX', label:'GeForce 8800 GTX'},{value:'GeForce GTX 650 Ti', label:'GeForce GTX 650 Ti'},{value:'Radeon HD 7770', label:'Radeon HD 7770'},{value:'Radeon RX 540', label:'Radeon RX 540'},{value:'Radeon HD 5870', label:'Radeon HD 5870'},{value:'Tesla C2070', label:'Tesla C2070'},{value:'GeForce GTX 960M', label:'GeForce GTX 960M'},{value:'Radeon R9 M370X', label:'Radeon R9 M370X'},{value:'Radeon R9 M360', label:'Radeon R9 M360'},{value:'FirePro 3D V8800', label:'FirePro 3D V8800'},{value:'Radeon HD 6970', label:'Radeon HD 6970'},{value:'Radeon Pro 455', label:'Radeon Pro 455'},{value:'Quadro K5000M', label:'Quadro K5000M'},{value:'GeForce 8800 GTS 512', label:'GeForce 8800 GTS 512'},{value:'Intel Iris Plus 655', label:'Intel Iris Plus 655'},{value:'GeForce GTX 590', label:'GeForce GTX 590'},{value:'Radeon Pro 555', label:'Radeon Pro 555'},{value:'FirePro 3D V9800', label:'FirePro 3D V9800'},{value:'Radeon R9 350', label:'Radeon R9 350'},{value:'Tesla C2050', label:'Tesla C2050'},{value:'Radeon R9 M275X / M375', label:'Radeon R9 M275X / M375'},{value:'Radeon R7 260', label:'Radeon R7 260'},{value:'GeForce GTX 470', label:'GeForce GTX 470'},{value:'GRID P40-24Q', label:'GRID P40-24Q'},{value:'Tesla C2050 / C2070', label:'Tesla C2050 / C2070'},{value:'Radeon R7 PRO A12-9800', label:'Radeon R7 PRO A12-9800'},{value:'Radeon Vega 8', label:'Radeon Vega 8'},{value:'Radeon R9 360', label:'Radeon R9 360'},{value:'Tesla C2075', label:'Tesla C2075'},{value:'Quadro K4000', label:'Quadro K4000'},{value:'Intel Iris Pro 580', label:'Intel Iris Pro 580'},{value:'GeForce GTX 765M', label:'GeForce GTX 765M'},{value:'Intel Iris Plus', label:'Intel Iris Plus'},{value:'NVS 810', label:'NVS 810'},{value:'Matrox C900 PCIe x16', label:'Matrox C900 PCIe x16'},{value:'GeForce GTX 850M', label:'GeForce GTX 850M'},{value:'FirePro W4100 Adapter', label:'FirePro W4100 Adapter'},{value:'Radeon HD 7700-serie', label:'Radeon HD 7700-serie'},{value:'Radeon R7 PRO A12-8870', label:'Radeon R7 PRO A12-8870'},{value:'GeForce GTX 950M', label:'GeForce GTX 950M'},{value:'Radeon HD 6950', label:'Radeon HD 6950'},{value:'GeForce GT 645', label:'GeForce GT 645'},{value:'GeForce GTX 560', label:'GeForce GTX 560'},{value:'Intel Iris Plus 650', label:'Intel Iris Plus 650'},{value:'RadeonT R5 430', label:'RadeonT R5 430'},{value:'Quadro 6000', label:'Quadro 6000'},{value:'Radeon HD 6990', label:'Radeon HD 6990'},{value:'Radeon R9 255', label:'Radeon R9 255'},{value:'Intel Coffee Lake UHD', label:'Intel Coffee Lake UHD'},{value:'GeForce MX150', label:'GeForce MX150'},{value:'Radeon RX Vega11', label:'Radeon RX Vega11'},{value:'Radeon Vega 9', label:'Radeon Vega 9'},{value:'GeForce GTX 460 v2', label:'GeForce GTX 460 v2'},{value:'Radeon HD 5970', label:'Radeon HD 5970'},{value:'FirePro M4000 Mobility Pro', label:'FirePro M4000 Mobility Pro'},{value:'Radeon RX Vega 10', label:'Radeon RX Vega 10'},{value:'Radeon Pro 450', label:'Radeon Pro 450'},{value:'Quadro K3100M', label:'Quadro K3100M'},{value:'Radeon TM R9 A360', label:'Radeon TM R9 A360'},{value:'Quadro K620', label:'Quadro K620'},{value:'FirePro W600', label:'FirePro W600'},{value:'Radeon RX Vega 8', label:'Radeon RX Vega 8'},{value:'Radeon R7 FX-9830P RADEON', label:'Radeon R7 FX-9830P RADEON'},{value:'FirePro W4100', label:'FirePro W4100'},{value:'Radeon R7 A12-9800 RADEON', label:'Radeon R7 A12-9800 RADEON'},{value:'Radeon HD 5850', label:'Radeon HD 5850'},{value:'FirePro M6000 Mobility Pro', label:'FirePro M6000 Mobility Pro'},{value:'Radeon HD 6870', label:'Radeon HD 6870'},{value:'Quadro P400', label:'Quadro P400'},{value:'Quadro K4000M', label:'Quadro K4000M'},{value:'Quadro M600M', label:'Quadro M600M'},{value:'Radeon Vega 10', label:'Radeon Vega 10'},{value:'Intel Iris Pro Graphics 6200', label:'Intel Iris Pro Graphics 6200'},{value:'GeForce GTX 745', label:'GeForce GTX 745'},{value:'GRID P40-2Q', label:'GRID P40-2Q'},{value:'Intel HD P630', label:'Intel HD P630'},{value:'GeForce GTX 670MX', label:'GeForce GTX 670MX'},{value:'Radeon Vega 10 Mobile', label:'Radeon Vega 10 Mobile'},{value:'GeForce GTX 465', label:'GeForce GTX 465'},{value:'Radeon R7 PRO A10-8770', label:'Radeon R7 PRO A10-8770'},{value:'GeForce GTX 460', label:'GeForce GTX 460'},{value:'Radeon E8860', label:'Radeon E8860'},{value:'GRID P40-3Q', label:'GRID P40-3Q'},{value:'GeForce GTX 555', label:'GeForce GTX 555'},{value:'Intel Iris Plus 640', label:'Intel Iris Plus 640'},{value:'Intel UHD P630', label:'Intel UHD P630'},{value:'Radeon HD 8870M / R9 M270X / M370X', label:'Radeon HD 8870M / R9 M270X / M370X'},{value:'FirePro M6000', label:'FirePro M6000'},{value:'GRID P40-4Q', label:'GRID P40-4Q'},{value:'FirePro 3D V7800', label:'FirePro 3D V7800'},{value:'GRID P100-8Q', label:'GRID P100-8Q'},{value:'Radeon R7 A10-7890K', label:'Radeon R7 A10-7890K'},{value:'FirePro M4000', label:'FirePro M4000'},{value:'Radeon HD 7750', label:'Radeon HD 7750'},{value:'GRID P100-16Q', label:'GRID P100-16Q'},{value:'FirePro M5100 FireGL V', label:'FirePro M5100 FireGL V'},{value:'MONSTER GeForce GTX 675M', label:'MONSTER GeForce GTX 675M'},{value:'Radeon R7 A8-7500', label:'Radeon R7 A8-7500'},{value:'Radeon HD 8870M', label:'Radeon HD 8870M'},
    {value:'Intel UHD 630', label:'Intel UHD 630'},{value:'Radeon HD 5830', label:'Radeon HD 5830'},{value:'Seria Radeon HD 7700', label:'Seria Radeon HD 7700'},{value:'Radeon R7 PRO A8-9600', label:'Radeon R7 PRO A8-9600'},{value:'GeForce GTX 675M', label:'GeForce GTX 675M'},{value:'Intel Iris 550', label:'Intel Iris 550'},{value:'TENSOR 1.0 Driver Intel HD 630', label:'TENSOR 1.0 Driver Intel HD 630'},{value:'Radeon Vega 8 Mobile', label:'Radeon Vega 8 Mobile'},{value:'GeForce GTX 560 SE', label:'GeForce GTX 560 SE'},{value:'Radeon R7 A10-9700 RADEON', label:'Radeon R7 A10-9700 RADEON'},{value:'Quadro 5000', label:'Quadro 5000'},{value:'GeForce GTX 580M', label:'GeForce GTX 580M'},{value:'GeForce GTX 760M', label:'GeForce GTX 760M'},{value:'GeForce GTX 645', label:'GeForce GTX 645'},{value:'Intel Iris Pro P6300', label:'Intel Iris Pro P6300'},{value:'GeForce GTX 670M', label:'GeForce GTX 670M'},{value:'Quadro M520', label:'Quadro M520'},{value:'GeForce GTX 485M', label:'GeForce GTX 485M'},{value:'Radeon R5 A10-9630P 4C+6G', label:'Radeon R5 A10-9630P 4C+6G'},{value:'Radeon R5 PRO A6-8570 2C+6G', label:'Radeon R5 PRO A6-8570 2C+6G'},{value:'Radeon HD HD7850M', label:'Radeon HD HD7850M'},{value:'Radeon R7 PRO A10-9700', label:'Radeon R7 PRO A10-9700'},{value:'Radeon HD 7730', label:'Radeon HD 7730'},{value:'Radeon R7 A10-7870K', label:'Radeon R7 A10-7870K'},{value:'Radeon R7 250', label:'Radeon R7 250'},{value:'GRID P100-1B', label:'GRID P100-1B'},{value:'GeForce GT 735M', label:'GeForce GT 735M'},{value:'Intel HD 630', label:'Intel HD 630'},{value:'Radeon R7 PRO A8-8670E', label:'Radeon R7 PRO A8-8670E'},{value:'GeForce MX130', label:'GeForce MX130'},{value:'Radeon R5 340', label:'Radeon R5 340'},{value:'Radeon R5 A6-9500 2C+6G', label:'Radeon R5 A6-9500 2C+6G'},{value:'Radeon R7 A12-9800E RADEON', label:'Radeon R7 A12-9800E RADEON'},{value:'Radeon HD 7560D + 7700 Dual', label:'Radeon HD 7560D + 7700 Dual'},{value:'Radeon R7 PRO A12-8870E', label:'Radeon R7 PRO A12-8870E'},{value:'Radeon R9 M270X', label:'Radeon R9 M270X'},{value:'Radeon R7 + R5 435 Dual A10-9700 RADEON', label:'Radeon R7 + R5 435 Dual A10-9700 RADEON'},{value:'Radeon HD 8670D + 7700 Dual', label:'Radeon HD 8670D + 7700 Dual'},{value:'Intel UHD 620', label:'Intel UHD 620'},{value:'Radeon HD 7870M', label:'Radeon HD 7870M'},{value:'Intel UHD', label:'Intel UHD'},{value:'GeForce GTX 460 SE', label:'GeForce GTX 460 SE'},{value:'Radeon HD 6850', label:'Radeon HD 6850'},{value:'Radeon R7 PRO A10-8770E', label:'Radeon R7 PRO A10-8770E'},{value:'Embedded Radeon E9173', label:'Embedded Radeon E9173'},{value:'FirePro V7900', label:'FirePro V7900'},{value:'GeForce 930MX', label:'GeForce 930MX'},{value:'GRID M60-1Q', label:'GRID M60-1Q'},{value:'Radeon R7 PRO A10-9700E', label:'Radeon R7 PRO A10-9700E'},{value:'GRID P40-2B', label:'GRID P40-2B'},{value:'Radeon R7 A8-9600 RADEON', label:'Radeon R7 A8-9600 RADEON'},{value:'Radeon R7 A10-7860K', label:'Radeon R7 A10-7860K'},{value:'Radeon R5 430', label:'Radeon R5 430'},{value:'Barco MXRT 5500', label:'Barco MXRT 5500'},{value:'Radeon R7 A10-9700E RADEON', label:'Radeon R7 A10-9700E RADEON'},{value:'Radeon R7 PRO A12-9800E', label:'Radeon R7 PRO A12-9800E'},{value:'Radeon R7 Opteron X3421', label:'Radeon R7 Opteron X3421'},{value:'GeForce GT 745M', label:'GeForce GT 745M'},{value:'Radeon R5 PRO A6-9500 2C+6G', label:'Radeon R5 PRO A6-9500 2C+6G'},{value:'Radeon R7 430', label:'Radeon R7 430'},{value:'Quadro K3000M', label:'Quadro K3000M'},{value:'Radeon R7 A8-7680', label:'Radeon R7 A8-7680'},{value:'Quadro 5010M', label:'Quadro 5010M'},{value:'GeForce 940MX', label:'GeForce 940MX'},{value:'Radeon Vega 6', label:'Radeon Vega 6'},{value:'Quadro K2100M', label:'Quadro K2100M'},{value:'Intel UHD Graphics 620', label:'Intel UHD Graphics 620'},{value:'Radeon R7 PRO A6-9500 2C+6G', label:'Radeon R7 PRO A6-9500 2C+6G'},{value:'GeForce GTX 480M', label:'GeForce GTX 480M'},{value:'Radeon HD 6790', label:'Radeon HD 6790'},{value:'GeForce GTX 550 Ti', label:'GeForce GTX 550 Ti'},{value:'Radeon R5 A6-9500E 2C+4G', label:'Radeon R5 A6-9500E 2C+4G'},{value:'Quadro K2000', label:'Quadro K2000'},{value:'Radeon R7 A8-7670K', label:'Radeon R7 A8-7670K'},{value:'Radeon R7 FX-8800P', label:'Radeon R7 FX-8800P'},{value:'GeForce GTX 570M', label:'GeForce GTX 570M'},{value:'Radeon R7 A10-8750', label:'Radeon R7 A10-8750'},{value:'Radeon HD 8570', label:'Radeon HD 8570'},{value:'Radeon R7 A10-7850K', label:'Radeon R7 A10-7850K'},{value:'Radeon HD 6900M', label:'Radeon HD 6900M'},{value:'GeForce GT 740', label:'GeForce GT 740'},{value:'GeForce GTX 650', label:'GeForce GTX 650'},{value:'Radeon R7 PRO A10-9700B', label:'Radeon R7 PRO A10-9700B'},{value:'Intel Iris 540', label:'Intel Iris 540'},{value:'Radeon R7 7850A10-7850K', label:'Radeon R7 7850A10-7850K'},{value:'Radeon HD 5770', label:'Radeon HD 5770'},{value:'Radeon HD 6770', label:'Radeon HD 6770'},{value:'Radeon R7 PRO A10-8850B', label:'Radeon R7 PRO A10-8850B'},{value:'Radeon R7 A10 PRO-7850B', label:'Radeon R7 A10 PRO-7850B'},{value:'Matrox C420 LP PCIe x16', label:'Matrox C420 LP PCIe x16'},{value:'Radeon R7 340', label:'Radeon R7 340'},{value:'Intel Iris 650', label:'Intel Iris 650'},{value:'Quadro K2000D', label:'Quadro K2000D'},{value:'GRID V100D-8Q', label:'GRID V100D-8Q'},{value:'GeForce GT 635', label:'GeForce GT 635'},{value:'Radeon Vega 3', label:'Radeon Vega 3'},{value:'Quadro K620M', label:'Quadro K620M'},{value:'Radeon HD 7850M', label:'Radeon HD 7850M'},{value:'FirePro 3D V5800', label:'FirePro 3D V5800'},{value:'Radeon R5 A6-7480', label:'Radeon R5 A6-7480'},{value:'Radeon R6 Opteron X3418', label:'Radeon R6 Opteron X3418'},{value:'Intel Iris Pro 5200', label:'Intel Iris Pro 5200'},{value:'GeForce 825M', label:'GeForce 825M'},{value:'GeForce GTX 470M', label:'GeForce GTX 470M'},{value:'GeForce GT 755M', label:'GeForce GT 755M'},{value:'Intel HD P530', label:'Intel HD P530'},{value:'GeForce GTX 660M', label:'GeForce GTX 660M'},{value:'Radeon R7 A12-9730P RADEON', label:'Radeon R7 A12-9730P RADEON'},{value:'Radeon R7 + R7 200 Dual', label:'Radeon R7 + R7 200 Dual'},{value:'Radeon R7 PRO A10-8750B', label:'Radeon R7 PRO A10-8750B'},{value:'Intel HD Graphics 620', label:'Intel HD Graphics 620'},{value:'GeForce GT 750M', label:'GeForce GT 750M'},{value:'Barco MXRT 5450', label:'Barco MXRT 5450'},{value:'Radeon R7 A12-9720P RADEON', label:'Radeon R7 A12-9720P RADEON'},{value:'Radeon R7 +8G', label:'Radeon R7 +8G'},{value:'Radeon R7 A8-7650K', label:'Radeon R7 A8-7650K'},{value:'GeForce GT 640', label:'GeForce GT 640'},{value:'FirePro W2100', label:'FirePro W2100'},{value:'Radeon R7 A10-7800', label:'Radeon R7 A10-7800'},{value:'Quadro 5000M', label:'Quadro 5000M'},{value:'GeForce 840M', label:'GeForce 840M'},{value:'GeForce GTS 450', label:'GeForce GTS 450'},{value:'GeForce 930A', label:'GeForce 930A'},{value:'FirePro M40003', label:'FirePro M40003'},{value:'NVS 310', label:'NVS 310'},{value:'Radeon HD 7660D + R7 240 Dual', label:'Radeon HD 7660D + R7 240 Dual'},{value:'GeForce 945M', label:'GeForce 945M'},{value:'Radeon Vega 3 Mobile', label:'Radeon Vega 3 Mobile'},{value:'GRID P6-2Q', label:'GRID P6-2Q'},{value:'Quadro 4000', label:'Quadro 4000'},{value:'Quadro 4000M', label:'Quadro 4000M'},{value:'Radeon R7 PRO A12-9800B', label:'Radeon R7 PRO A12-9800B'},{value:'Radeon HD 7750M', label:'Radeon HD 7750M'},{value:'Radeon R7 FX-9800P RADEON', label:'Radeon R7 FX-9800P RADEON'},
    {value:'Radeon R5 PRO A8-9600B 4C+6G', label:'Radeon R5 PRO A8-9600B 4C+6G'},{value:'Radeon R7 A10-7700K', label:'Radeon R7 A10-7700K'},{value:'GeForce 940M', label:'GeForce 940M'},{value:'Radeon R7 PRO A12-8830B', label:'Radeon R7 PRO A12-8830B'},{value:'GeForce GT 730', label:'GeForce GT 730'},{value:'Radeon R5 240', label:'Radeon R5 240'},{value:'GeForce GT 740M', label:'GeForce GT 740M'},{value:'GRID M60-8Q', label:'GRID M60-8Q'},{value:'GeForce 930M', label:'GeForce 930M'},{value:'Radeon R7 A10 PRO-7800B', label:'Radeon R7 A10 PRO-7800B'},{value:'GeForce GTX 560M', label:'GeForce GTX 560M'},{value:'FirePro M4150', label:'FirePro M4150'},{value:'Radeon R5 PRO A6-9500E 2C+4G', label:'Radeon R5 PRO A6-9500E 2C+4G'},{value:'Intel Iris 6100', label:'Intel Iris 6100'},{value:'GeForce MX110', label:'GeForce MX110'},{value:'Radeon R7 A8-7600', label:'Radeon R7 A8-7600'},{value:'Radeon HD 5750', label:'Radeon HD 5750'},{value:'Radeon R7 240', label:'Radeon R7 240'},{value:'Radeon HD 7730M', label:'Radeon HD 7730M'},{value:'Radeon R5 PRO A6-8570E 2C+4G', label:'Radeon R5 PRO A6-8570E 2C+4G'},{value:'GeForce 830M', label:'GeForce 830M'},{value:'GRID M6-8Q', label:'GRID M6-8Q'},{value:'Quadro K2000M', label:'Quadro K2000M'},{value:'Quadro K1100M', label:'Quadro K1100M'},{value:'Professional HD Driver', label:'Professional HD Driver'},{value:'GeForce 920MX', label:'GeForce 920MX'},{value:'Radeon HD 6750', label:'Radeon HD 6750'},{value:'GeForce GT 730M', label:'GeForce GT 730M'},{value:'Radeon HD 8470D + HD 7500 Dual', label:'Radeon HD 8470D + HD 7500 Dual'},{value:'Quadro 2000D', label:'Quadro 2000D'},{value:'Quadro 2000', label:'Quadro 2000'},{value:'FirePro V5800', label:'FirePro V5800'},{value:'Radeon HD 8570D + HD 8570 Dual', label:'Radeon HD 8570D + HD 8570 Dual'},{value:'Radeon R7 PRO A12-8800B', label:'Radeon R7 PRO A12-8800B'},{value:'Radeon R5 A10-9620P 4C+6G', label:'Radeon R5 A10-9620P 4C+6G'},{value:'GeForce 920M', label:'GeForce 920M'},{value:'Radeon R9 M265X', label:'Radeon R9 M265X'},{value:'Intel HD 530', label:'Intel HD 530'},{value:'Mobility Radeon HD 5870', label:'Mobility Radeon HD 5870'},{value:'Barco MXRT 7400', label:'Barco MXRT 7400'},{value:'GeForce GT 650M', label:'GeForce GT 650M'},{value:'Barco MXRT 5400', label:'Barco MXRT 5400'},{value:'Radeon HD 8650G + 7700M Dual', label:'Radeon HD 8650G + 7700M Dual'},{value:'Intel UHD 617', label:'Intel UHD 617'},{value:'Radeon R5 A10-9600P 4C+6G', label:'Radeon R5 A10-9600P 4C+6G'},{value:'Radeon R7 A12-9700P RADEON', label:'Radeon R7 A12-9700P RADEON'},{value:'Radeon R7 A8-8650', label:'Radeon R7 A8-8650'},{value:'GeForce GT 240', label:'GeForce GT 240'},{value:'Radeon HD 6800M', label:'Radeon HD 6800M'},{value:'Radeon HD 8670D + R7 200 Dual', label:'Radeon HD 8670D + R7 200 Dual'},{value:'Radeon HD 8750M', label:'Radeon HD 8750M'},{value:'Radeon R5 A6-9400 RADEON R5, 6 COMPUTE CORES 2C+4G', label:'Radeon R5 A6-9400 RADEON R5, 6 COMPUTE CORES 2C+4G'},{value:'Radeon R7 G', label:'Radeon R7 G'},{value:'Radeon R7 + R7 240 Dual', label:'Radeon R7 + R7 240 Dual'},{value:'Radeon R7 PRO A8-8650B', label:'Radeon R7 PRO A8-8650B'},{value:'Radeon 540', label:'Radeon 540'},{value:'GRID M10-8Q', label:'GRID M10-8Q'},{value:'Radeon R5 PRO A10-8730B 4C+6G', label:'Radeon R5 PRO A10-8730B 4C+6G'},{value:'GRID K280Q', label:'GRID K280Q'},{value:'Radeon HD 6650M', label:'Radeon HD 6650M'},{value:'GeForce GT 820M', label:'GeForce GT 820M'},{value:'Ryzen 7 2700U with Radeon Vega', label:'Ryzen 7 2700U with Radeon Vega'},{value:'Radeon HD 4650', label:'Radeon HD 4650'},{value:'Radeon HD 7640G + R5 M200 Dual', label:'Radeon HD 7640G + R5 M200 Dual'},{value:'Intel HD 6000', label:'Intel HD 6000'},{value:'Radeon HD 5600/5700', label:'Radeon HD 5600/5700'},{value:'Radeon R5 PRO A6-8500B 2C+4G', label:'Radeon R5 PRO A6-8500B 2C+4G'},{value:'Radeon HD 8570D + R7 240 Dual', label:'Radeon HD 8570D + R7 240 Dual'},{value:'Radeon HD 7520G + 7700M Dual', label:'Radeon HD 7520G + 7700M Dual'},{value:'Radeon R5 A6-8500P', label:'Radeon R5 A6-8500P'},{value:'GRID M60-4Q', label:'GRID M60-4Q'},{value:'Quadro 3000M', label:'Quadro 3000M'},{value:'GeForce GT 640M', label:'GeForce GT 640M'},{value:'GeForce GT 710', label:'GeForce GT 710'},{value:'GeForce GTX 460M', label:'GeForce GTX 460M'},{value:'Radeon R6 A10-8700P', label:'Radeon R6 A10-8700P'},{value:'Radeon HD 8670D + R7 240 Dual', label:'Radeon HD 8670D + R7 240 Dual'},{value:'Radeon R7 A8 PRO-7600B', label:'Radeon R7 A8 PRO-7600B'},{value:'Radeon R5 PRO A6-8530B 2C+4G', label:'Radeon R5 PRO A6-8530B 2C+4G'},{value:'Radeon HD 8570 + HD 7660D Dual', label:'Radeon HD 8570 + HD 7660D Dual'},{value:'Intel UHD 610', label:'Intel UHD 610'},{value:'Radeon HD 8570D + R7 200 Dual', label:'Radeon HD 8570D + R7 200 Dual'},{value:'Intel HD 520', label:'Intel HD 520'},{value:'Radeon HD 8670D + 8570 Dual', label:'Radeon HD 8670D + 8570 Dual'},{value:'FirePro W4170M', label:'FirePro W4170M'},{value:'GRID V100-8Q', label:'GRID V100-8Q'},{value:'Radeon HD 7560D + HD 8570 Dual', label:'Radeon HD 7560D + HD 8570 Dual'},{value:'Radeon HD 8570 + 8670D Dual', label:'Radeon HD 8570 + 8670D Dual'},{value:'GeForce GT 545', label:'GeForce GT 545'},{value:'Radeon R7 A8-7500 4C+6G', label:'Radeon R7 A8-7500 4C+6G'},{value:'Radeon HD 8670D + 7000 Dual', label:'Radeon HD 8670D + 7000 Dual'},{value:'Quadro K610M', label:'Quadro K610M'},{value:'GRID M60-0B', label:'GRID M60-0B'},{value:'Radeon R7 240 + HD 8570D Dual', label:'Radeon R7 240 + HD 8570D Dual'},{value:'Radeon HD 8450G + 8600/8700M Dual', label:'Radeon HD 8450G + 8600/8700M Dual'},{value:'Radeon R7 240 + HD 8670D Dual', label:'Radeon R7 240 + HD 8670D Dual'},{value:'Radeon HD 7670', label:'Radeon HD 7670'},{value:'FirePro V4900', label:'FirePro V4900'},{value:'Quadro 2000M', label:'Quadro 2000M'},{value:'Intel Iris Pro 6100', label:'Intel Iris Pro 6100'},{value:'Quadro 2000 D', label:'Quadro 2000 D'},{value:'Radeon HD 7560D + HD 6670 Dual', label:'Radeon HD 7560D + HD 6670 Dual'},{value:'GeForce GT 640M LE', label:'GeForce GT 640M LE'},{value:'Intel HD 610', label:'Intel HD 610'},{value:'Intel UHD 615', label:'Intel UHD 615'},{value:'GeForce GT 720', label:'GeForce GT 720'},{value:'GeForce 710M', label:'GeForce 710M'},{value:'GeForce GT 710M', label:'GeForce GT 710M'},{value:'Intel HD 5200', label:'Intel HD 5200'},{value:'Radeon R6 PRO A10-8700B 4C+6G', label:'Radeon R6 PRO A10-8700B 4C+6G'},{value:'Radeon HD 6670', label:'Radeon HD 6670'},{value:'GeForce 820M', label:'GeForce 820M'},{value:'Intel Iris 5100', label:'Intel Iris 5100'},{value:'Intel HD P4600/P4700', label:'Intel HD P4600/P4700'},{value:'Radeon R7 M465', label:'Radeon R7 M465'},{value:'Intel HD 4600', label:'Intel HD 4600'},{value:'Radeon HD 7560D + 7670 Dual', label:'Radeon HD 7560D + 7670 Dual'},{value:'Radeon HD 7560D + 6670 Dual', label:'Radeon HD 7560D + 6670 Dual'},{value:'Radeon HD 8550G + HD 8750M Dual', label:'Radeon HD 8550G + HD 8750M Dual'},{value:'GeForce 210', label:'GeForce 210'},{value:'FirePro W5130M', label:'FirePro W5130M'},{value:'Radeon R5 PRO A6-9500B 2C+4G', label:'Radeon R5 PRO A6-9500B 2C+4G'},{value:'Radeon HD 7660D + 6670 Dual', label:'Radeon HD 7660D + 6670 Dual'},{value:'Radeon HD 8670D + HD 7000 Dual', label:'Radeon HD 8670D + HD 7000 Dual'},{value:'Radeon HD 8670D + HD 6670 Dual', label:'Radeon HD 8670D + HD 6670 Dual'},{value:'Radeon HD 8670D + 6670 Dual', label:'Radeon HD 8670D + 6670 Dual'},{value:'Radeon R6 A8-8600P', label:'Radeon R6 A8-8600P'},{value:'A10-8700P', label:'A10-8700P'},{value:'Radeon HD 8730M', label:'Radeon HD 8730M'},{value:'Intel HD 615', label:'Intel HD 615'},{value:'Radeon HD 7560D + HD 7670 Dual', label:'Radeon HD 7560D + HD 7670 Dual'},{value:'GRID M60-2Q', label:'GRID M60-2Q'},{value:'Radeon R5 M240', label:'Radeon R5 M240'},
    {value:'FirePro V3900', label:'FirePro V3900'},{value:'Mobility Radeon HD 5850', label:'Mobility Radeon HD 5850'},{value:'GRID K240Q', label:'GRID K240Q'},{value:'Radeon HD 8570D + 6670 Dual', label:'Radeon HD 8570D + 6670 Dual'},{value:'Radeon HD 8650G + HD 8750M Dual', label:'Radeon HD 8650G + HD 8750M Dual'},{value:'GRID M10-0Q', label:'GRID M10-0Q'},{value:'GRID M10-4Q', label:'GRID M10-4Q'},{value:'Radeon R6 PRO A8-8600B 4C+6G', label:'Radeon R6 PRO A8-8600B 4C+6G'},{value:'GeForce GT 635M', label:'GeForce GT 635M'},{value:'GRID M10-1Q', label:'GRID M10-1Q'},{value:'FirePro 3D V4800', label:'FirePro 3D V4800'},{value:'Radeon HD 6700M', label:'Radeon HD 6700M'},{value:'GeForce GT 720M', label:'GeForce GT 720M'},{value:'Radeon R7E', label:'Radeon R7E'},{value:'Radeon HD 7670A', label:'Radeon HD 7670A'},{value:'GeForce GT 645M', label:'GeForce GT 645M'},{value:'Radeon HD 8570D + HD 6670 Dual', label:'Radeon HD 8570D + HD 6670 Dual'},{value:'Radeon HD 7660G N HD 7660G + HD 7700M N HD 7700M D', label:'Radeon HD 7660G N HD 7660G + HD 7700M N HD 7700M D'},{value:'Radeon HD 7660G + 7730M Dual', label:'Radeon HD 7660G + 7730M Dual'},{value:'Radeon HD 8670D', label:'Radeon HD 8670D'},{value:'Quadro K420', label:'Quadro K420'},{value:'GeForce 710A', label:'GeForce 710A'},{value:'Radeon HD 7660D + 7670 Dual', label:'Radeon HD 7660D + 7670 Dual'},{value:'Radeon HD 8670D + R5 235 Dual', label:'Radeon HD 8670D + R5 235 Dual'},{value:'Radeon HD 7690M', label:'Radeon HD 7690M'},{value:'NVS 5400M', label:'NVS 5400M'},{value:'Radeon R5 Opteron X3216', label:'Radeon R5 Opteron X3216'},{value:'Radeon HD 5670', label:'Radeon HD 5670'},{value:'Radeon HD 6670 + 6670 Dual', label:'Radeon HD 6670 + 6670 Dual'},{value:'GeForce GT 555M', label:'GeForce GT 555M'},{value:'Radeon HD 7650A', label:'Radeon HD 7650A'},{value:'Radeon HD 7570', label:'Radeon HD 7570'},{value:'Ryzen 5 2500U with Radeon Vega', label:'Ryzen 5 2500U with Radeon Vega'},{value:'Radeon HD 7660D', label:'Radeon HD 7660D'},{value:'Quadro K1000M', label:'Quadro K1000M'},{value:'Radeon E6760', label:'Radeon E6760'},{value:'Intel HD 5500', label:'Intel HD 5500'},{value:'Radeon R5 330', label:'Radeon R5 330'},{value:'Radeon HD 8610G + HD 8500M Dual', label:'Radeon HD 8610G + HD 8500M Dual'},{value:'Radeon HD 8650G N HD 8650G + HD 8600M N HD 8600M D', label:'Radeon HD 8650G N HD 8650G + HD 8600M N HD 8600M D'},{value:'Radeon R4E', label:'Radeon R4E'},{value:'Radeon HD 8550G + R5 M200 Dual', label:'Radeon HD 8550G + R5 M200 Dual'},{value:'Radeon R6', label:'Radeon R6'},{value:'GeForce GT 550M', label:'GeForce GT 550M'},{value:'GeForce GT 630', label:'GeForce GT 630'},{value:'Radeon HD 6570', label:'Radeon HD 6570'},{value:'Radeon HD 8670D N HD 8670D + HD 8670D Dual', label:'Radeon HD 8670D N HD 8670D + HD 8670D Dual'},{value:'Radeon HD 8650G + 8600/8700M Dual', label:'Radeon HD 8650G + 8600/8700M Dual'},{value:'Radeon 530', label:'Radeon 530'},{value:'Radeon HD 7560D + 7560D Dual', label:'Radeon HD 7560D + 7560D Dual'},{value:'Radeon HD 7560D + HD 6570 Dual', label:'Radeon HD 7560D + HD 6570 Dual'},{value:'GeForce GT 445M', label:'GeForce GT 445M'},{value:'Quadro K600', label:'Quadro K600'},{value:'GeForce GT 440', label:'GeForce GT 440'},{value:'NVS 5200M', label:'NVS 5200M'},{value:'FirePro V5900', label:'FirePro V5900'},{value:'Radeon HD 8570D + 6570 Dual', label:'Radeon HD 8570D + 6570 Dual'},{value:'Radeon HD7570', label:'Radeon HD7570'},{value:'Radeon HD 7660D + 7500 Dual', label:'Radeon HD 7660D + 7500 Dual'},{value:'Radeon HD 7640G + HD 8600/8700M Dual', label:'Radeon HD 7640G + HD 8600/8700M Dual'},{value:'Radeon HD 7660D + 7540D Dual', label:'Radeon HD 7660D + 7540D Dual'},{value:'Radeon HD 8610G + R5 M200 Dual', label:'Radeon HD 8610G + R5 M200 Dual'},{value:'Radeon HD 7660D + 6570 Dual', label:'Radeon HD 7660D + 6570 Dual'},{value:'GeForce GT 630M', label:'GeForce GT 630M'},{value:'GRID K1', label:'GRID K1'},{value:'Intel 6th Gen Skylake HD 530', label:'Intel 6th Gen Skylake HD 530'},{value:'Radeon HD 8650G', label:'Radeon HD 8650G'},{value:'Radeon HD 8570D + HD 6570 Dual', label:'Radeon HD 8570D + HD 6570 Dual'},{value:'Radeon HD 8470D + 6570 Dual', label:'Radeon HD 8470D + 6570 Dual'},{value:'GRID M10-2B', label:'GRID M10-2B'},{value:'Radeon HD 7660G + 7700M Dual', label:'Radeon HD 7660G + 7700M Dual'},{value:'Radeon HD 7540D + 7500 Dual', label:'Radeon HD 7540D + 7500 Dual'},{value:'NVS 510', label:'NVS 510'},{value:'Radeon HD 8650G + 8750M Dual', label:'Radeon HD 8650G + 8750M Dual'},{value:'7900 MOD - Radeon HD 6550D', label:'7900 MOD - Radeon HD 6550D'},{value:'GeForce GT 530', label:'GeForce GT 530'},{value:'Intel HD 5000', label:'Intel HD 5000'},{value:'GeForce GT 620M', label:'GeForce GT 620M'},{value:'Radeon HD 7660D + HD 7000 Dual', label:'Radeon HD 7660D + HD 7000 Dual'},{value:'Radeon HD 7660G + HD 7670M Dual', label:'Radeon HD 7660G + HD 7670M Dual'},{value:'Intel Poison Ivy', label:'Intel Poison Ivy'},{value:'Intel HD 5600', label:'Intel HD 5600'},{value:'Radeon R7 M440', label:'Radeon R7 M440'},{value:'Quadro 600', label:'Quadro 600'},{value:'Radeon HD 7560D + 7570 Dual', label:'Radeon HD 7560D + 7570 Dual'},{value:'Radeon HD 8650G + HD 8600/8700M Dual', label:'Radeon HD 8650G + HD 8600/8700M Dual'},{value:'Radeon HD 7520G + HD 7600M Dual', label:'Radeon HD 7520G + HD 7600M Dual'},{value:'Intel HD 515', label:'Intel HD 515'},{value:'Radeon HD 7640G + 8600/8700M Dual', label:'Radeon HD 7640G + 8600/8700M Dual'},{value:'Quadro 1000M', label:'Quadro 1000M'},{value:'Radeon HD 8550G + 8750M Dual', label:'Radeon HD 8550G + 8750M Dual'},{value:'Radeon 6600M', label:'Radeon 6600M'},{value:'Intel HD 510', label:'Intel HD 510'},{value:'Radeon HD 7570M', label:'Radeon HD 7570M'},{value:'Intel UHD 605', label:'Intel UHD 605'},{value:'FirePro M2000', label:'FirePro M2000'},{value:'Radeon HD 7620G + 8670M Dual', label:'Radeon HD 7620G + 8670M Dual'},{value:'Radeon HD 8670D + HD 7600 Dual', label:'Radeon HD 8670D + HD 7600 Dual'},{value:'Radeon HD 7540D + 6570 Dual', label:'Radeon HD 7540D + 6570 Dual'},{value:'Radeon HD 7660G + HD 7700M Dual', label:'Radeon HD 7660G + HD 7700M Dual'},{value:'Radeon HD 7660G', label:'Radeon HD 7660G'},{value:'Radeon HD 6650A', label:'Radeon HD 6650A'},{value:'Matrox G200e WDDM 2.0', label:'Matrox G200e WDDM 2.0'},{value:'Mobility Radeon HD 5570', label:'Mobility Radeon HD 5570'},{value:'GeForce GT 430', label:'GeForce GT 430'},{value:'Radeon HD 7660G + 8670M Dual', label:'Radeon HD 7660G + 8670M Dual'},{value:'Intel HD 4400', label:'Intel HD 4400'},{value:'Barco MXRT 2600', label:'Barco MXRT 2600'},{value:'Radeon HD 8650G + HD 8600M N HD 8600M Dual', label:'Radeon HD 8650G + HD 8600M N HD 8600M Dual'},{value:'Radeon HD 8650G + R5 M230 Dual', label:'Radeon HD 8650G + R5 M230 Dual'},{value:'Radeon HD 8650G N HD 8650G + HD 8600/8700M Dual', label:'Radeon HD 8650G N HD 8650G + HD 8600/8700M Dual'},{value:'Radeon HD 8650G + HD 8670M Dual', label:'Radeon HD 8650G + HD 8670M Dual'},{value:'Radeon HD 8550G + 8600/8700M Dual', label:'Radeon HD 8550G + 8600/8700M Dual'},{value:'Radeon HD 7670M', label:'Radeon HD 7670M'},{value:'Radeon HD 6550D', label:'Radeon HD 6550D'},{value:'Radeon HD 5570', label:'Radeon HD 5570'},{value:'Radeon R5 420', label:'Radeon R5 420'},{value:'Quadro 410', label:'Quadro 410'},{value:'Intel HD P4600', label:'Intel HD P4600'},{value:'Radeon R7 M365X', label:'Radeon R7 M365X'},{value:'Radeon HD 8650D', label:'Radeon HD 8650D'},{value:'Radeon HD 8650G + 7670M Dual', label:'Radeon HD 8650G + 7670M Dual'},{value:'FirePro V3800', label:'FirePro V3800'},{value:'GeForce GT 540M', label:'GeForce GT 540M'},{value:'Radeon HD 7560D + 6570 Dual', label:'Radeon HD 7560D + 6570 Dual'},{value:'Radeon HD 8650G + 7600M Dual', label:'Radeon HD 8650G + 7600M Dual'},{value:'Radeon HD 7520G + HD 8750M Dual', label:'Radeon HD 7520G + HD 8750M Dual'},{value:'Intel HD Family', label:'Intel HD Family'},{value:'Radeon HD 8650G + 8500M Dual', label:'Radeon HD 8650G + 8500M Dual'},{value:'Radeon HD 7660G + 7600M Dual', label:'Radeon HD 7660G + 7600M Dual'},{value:'NVS 4200M', label:'NVS 4200M'},{value:'Radeon HD 8570D', label:'Radeon HD 8570D'},{value:'Radeon HD 8550G + 8690M Dual', label:'Radeon HD 8550G + 8690M Dual'},{value:'GeForce GT 520MX', label:'GeForce GT 520MX'},{value:'Mobility Radeon HD 5730', label:'Mobility Radeon HD 5730'},{value:'Radeon RX 550X', label:'Radeon RX 550X'},{value:'Radeon HD 8650G + 8670M Dual', label:'Radeon HD 8650G + 8670M Dual'},{value:'Intel HD 3000', label:'Intel HD 3000'},{value:'Radeon HD 7660G N HD 7660G + HD 7670M Dual', label:'Radeon HD 7660G N HD 7660G + HD 7670M Dual'},{value:'Radeon HD 7660G N HD 7660G + HD 7600M N HD 7600M D', label:'Radeon HD 7660G N HD 7660G + HD 7600M N HD 7600M D'},{value:'Radeon HD 8470D + HD 6450 Dual', label:'Radeon HD 8470D + HD 6450 Dual'},{value:'Radeon HD 8650G N HD 8650G + HD 8570M Dual', label:'Radeon HD 8650G N HD 8650G + HD 8570M Dual'},{value:'Radeon HD 8610G', label:'Radeon HD 8610G'},{value:'FirePro 3D V3800', label:'FirePro 3D V3800'},{value:'Radeon HD 7560D', label:'Radeon HD 7560D'},{value:'Radeon HD 7600M + 7600M Dual', label:'Radeon HD 7600M + 7600M Dual'},{value:'Radeon HD 8650G + 8570M Dual', label:'Radeon HD 8650G + 8570M Dual'},{value:'Radeon HD 7640G N HD 7640G + HD 7600M N HD 7600M D', label:'Radeon HD 7640G N HD 7640G + HD 7600M N HD 7600M D'},
    {value:'Radeon HD 7640G + HD 7670M Dual', label:'Radeon HD 7640G + HD 7670M Dual'},{value:'Radeon HD 7560D + 6450 Dual', label:'Radeon HD 7560D + 6450 Dual'},{value:'Intel HD P4000', label:'Intel HD P4000'},{value:'Radeon HD 7550M/7650M', label:'Radeon HD 7550M/7650M'},{value:'GRID M10-1B', label:'GRID M10-1B'},{value:'GeForce GT 435M', label:'GeForce GT 435M'},{value:'Radeon HD 7660G + 7670M Dual', label:'Radeon HD 7660G + 7670M Dual'},{value:'Radeon HD 7660G + 7400M Dual', label:'Radeon HD 7660G + 7400M Dual'},{value:'Radeon HD 8610G + HD 8670M Dual', label:'Radeon HD 8610G + HD 8670M Dual'},{value:'Radeon HD 7660G + 7610M Dual', label:'Radeon HD 7660G + 7610M Dual'},{value:'Intel UHD 600', label:'Intel UHD 600'},{value:'Radeon HD 8550G + HD 8600M Dual', label:'Radeon HD 8550G + HD 8600M Dual'},{value:'Radeon HD 7620G + 8600M Dual', label:'Radeon HD 7620G + 8600M Dual'},{value:'Radeon HD 8610G + 8670M Dual', label:'Radeon HD 8610G + 8670M Dual'},{value:'GeForce GT 425M', label:'GeForce GT 425M'},{value:'Radeon HD 7640G + HD 8500M Dual', label:'Radeon HD 7640G + HD 8500M Dual'},{value:'Radeon HD 7620G + HD 8670M Dual', label:'Radeon HD 7620G + HD 8670M Dual'},{value:'Radeon HD 8550D', label:'Radeon HD 8550D'},{value:'SUMO 9640', label:'SUMO 9640'},{value:'Radeon HD 7660G + HD 7500/7600 7500/7600 Dual', label:'Radeon HD 7660G + HD 7500/7600 7500/7600 Dual'},{value:'Radeon HD 8650G + 8600M Dual', label:'Radeon HD 8650G + 8600M Dual'},{value:'Radeon R1E', label:'Radeon R1E'},{value:'Radeon HD 8610G + 8600M Dual', label:'Radeon HD 8610G + 8600M Dual'},{value:'Mobility Radeon HD 5000', label:'Mobility Radeon HD 5000'},{value:'Radeon HD 8650G + HD 8570M Dual', label:'Radeon HD 8650G + HD 8570M Dual'},{value:'Radeon HD 7550M', label:'Radeon HD 7550M'},{value:'Radeon HD 8610G + 8500M Dual', label:'Radeon HD 8610G + 8500M Dual'},{value:'Radeon HD 8570D + HD 7000 Dual', label:'Radeon HD 8570D + HD 7000 Dual'},{value:'Radeon HD 7650M', label:'Radeon HD 7650M'},{value:'Intel HD 4000', label:'Intel HD 4000'},{value:'Radeon HD 8510G', label:'Radeon HD 8510G'},{value:'Radeon HD 8570D + R5 235 Dual', label:'Radeon HD 8570D + R5 235 Dual'},{value:'Radeon R7 M350', label:'Radeon R7 M350'},{value:'Radeon R4', label:'Radeon R4'},{value:'Radeon HD 7660G + 8600M Dual', label:'Radeon HD 7660G + 8600M Dual'},{value:'Radeon HD 7660G + 7470M Dual', label:'Radeon HD 7660G + 7470M Dual'},{value:'Radeon HD 7660D + R5 235 Dual', label:'Radeon HD 7660D + R5 235 Dual'},{value:'Radeon HD 7660G + HD 8500M Dual', label:'Radeon HD 7660G + HD 8500M Dual'},{value:'Radeon HD 8550G', label:'Radeon HD 8550G'},{value:'Radeon HD 7640G + 7600M Dual', label:'Radeon HD 7640G + 7600M Dual'},{value:'Radeon R5 235 + HD 7560D Dual', label:'Radeon R5 235 + HD 7560D Dual'},{value:'Radeon HD 7660D + 7470 Dual', label:'Radeon HD 7660D + 7470 Dual'},{value:'Qualcomm Adreno 630 GPU', label:'Qualcomm Adreno 630 GPU'},{value:'GeForce GT 525M', label:'GeForce GT 525M'},{value:'Radeon HD 6550A', label:'Radeon HD 6550A'},{value:'GeForce GT 420M', label:'GeForce GT 420M'},{value:'Radeon HD 8550G + 8500M Dual', label:'Radeon HD 8550G + 8500M Dual'},{value:'Mobility Radeon HD 5650', label:'Mobility Radeon HD 5650'},{value:'GeForce GT 620', label:'GeForce GT 620'},{value:'Radeon HD 5550', label:'Radeon HD 5550'},{value:'Radeon HD 8470D + 6450 Dual', label:'Radeon HD 8470D + 6450 Dual'},{value:'GeForce GT 710B', label:'GeForce GT 710B'},{value:'Radeon HD 8470D', label:'Radeon HD 8470D'},{value:'Radeon HD 8510G + 8500M Dual', label:'Radeon HD 8510G + 8500M Dual'},{value:'Radeon HD 7620G', label:'Radeon HD 7620G'},{value:'Matrox G200eW3 WDDM 2.0', label:'Matrox G200eW3 WDDM 2.0'},{value:'Radeon HD 7660G + HD 7600M Dual', label:'Radeon HD 7660G + HD 7600M Dual'},{value:'Radeon HD 8650G + HD 8600M Dual', label:'Radeon HD 8650G + HD 8600M Dual'},{value:'Radeon HD 8550G + 8570M Dual', label:'Radeon HD 8550G + 8570M Dual'},{value:'Intel HD 5300', label:'Intel HD 5300'},{value:'Radeon HD 7640G + HD 7600M Dual', label:'Radeon HD 7640G + HD 7600M Dual'},{value:'Intel HD 505', label:'Intel HD 505'},{value:'GeForce GT 705', label:'GeForce GT 705'},{value:'GRID K140Q', label:'GRID K140Q'},{value:'Radeon HD 7540D', label:'Radeon HD 7540D'},{value:'Radeon HD 7560D + R5 235 Dual', label:'Radeon HD 7560D + R5 235 Dual'},{value:'Radeon HD8490', label:'Radeon HD8490'},{value:'Radeon HD 7640G + 7670M Dual', label:'Radeon HD 7640G + 7670M Dual'},{value:'Radeon HD 7640G', label:'Radeon HD 7640G'},{value:'Radeon HD 7610M', label:'Radeon HD 7610M'},{value:'Radeon HD 7500G + 7550M Dual', label:'Radeon HD 7500G + 7550M Dual'},{value:'Radeon HD 6620G', label:'Radeon HD 6620G'},{value:'GeForce 615', label:'GeForce 615'},{value:'Quadro 500M', label:'Quadro 500M'},{value:'Radeon HD 7600G', label:'Radeon HD 7600G'},{value:'Radeon HD 8490', label:'Radeon HD 8490'},{value:'Radeon HD 7640G + 7650M Dual', label:'Radeon HD 7640G + 7650M Dual'},{value:'Radeon HD 7640G + 8670M Dual', label:'Radeon HD 7640G + 8670M Dual'},{value:'Radeon HD 8550G + 8670M Dual', label:'Radeon HD 8550G + 8670M Dual'},{value:'SUMO 964A', label:'SUMO 964A'},{value:'Radeon R5 235X', label:'Radeon R5 235X'},{value:'Radeon HD 7640G + 7500M/7600M Dual', label:'Radeon HD 7640G + 7500M/7600M Dual'},{value:'Radeon HD 7640G + 8500M Dual', label:'Radeon HD 7640G + 8500M Dual'},{value:'Radeon HD 7640G N HD 7640G + HD 7670M Dual', label:'Radeon HD 7640G N HD 7640G + HD 7670M Dual'},{value:'GeForce GT 625', label:'GeForce GT 625'},{value:'Radeon HD 7670M + 7670M Dual', label:'Radeon HD 7670M + 7670M Dual'},{value:'Radeon HD 8570D + HD 8470 Dual', label:'Radeon HD 8570D + HD 8470 Dual'},{value:'Radeon HD 7640G + 7690M Dual', label:'Radeon HD 7640G + 7690M Dual'},{value:'Mobile Intel HD', label:'Mobile Intel HD'},{value:'Radeon HD 7640G + 7450M Dual', label:'Radeon HD 7640G + 7450M Dual'},{value:'Radeon HD 7640G + 7700M Dual', label:'Radeon HD 7640G + 7700M Dual'},{value:'Radeon HD 7600G + HD Dual', label:'Radeon HD 7600G + HD Dual'},{value:'Radeon R3', label:'Radeon R3'},{value:'Radeon HD 7640G + 8750M Dual', label:'Radeon HD 7640G + 8750M Dual'},{value:'GeForce 610M', label:'GeForce 610M'},{value:'Radeon HD 7560D + HD 7000 Dual', label:'Radeon HD 7560D + HD 7000 Dual'},{value:'IncrediblE HD 4600', label:'IncrediblE HD 4600'},{value:'GeForce GT 420', label:'GeForce GT 420'},{value:'Radeon HD 7500G + 7500M/7600M Dual', label:'Radeon HD 7500G + 7500M/7600M Dual'},{value:'Radeon HD 6530D', label:'Radeon HD 6530D'},{value:'7900 MOD - Radeon HD 6520G', label:'7900 MOD - Radeon HD 6520G'},{value:'Radeon HD 7640G + 8570M Dual', label:'Radeon HD 7640G + 8570M Dual'},{value:'Radeon HD 7470', label:'Radeon HD 7470'},{value:'Intel Skylake HD DT GT2', label:'Intel Skylake HD DT GT2'},{value:'Radeon HD 7640G + 7500/7600 Dual', label:'Radeon HD 7640G + 7500/7600 Dual'},{value:'Intel HD 500', label:'Intel HD 500'},{value:'Radeon HD 8470', label:'Radeon HD 8470'},{value:'Radeon R5E', label:'Radeon R5E'},{value:'Radeon HD 7540D + HD 6450 Dual', label:'Radeon HD 7540D + HD 6450 Dual'},{value:'Radeon HD 8400', label:'Radeon HD 8400'},{value:'Radeon HD 8550G + 8600M Dual', label:'Radeon HD 8550G + 8600M Dual'},{value:'GeForce GT 610', label:'GeForce GT 610'},{value:'Radeon R5 310', label:'Radeon R5 310'},{value:'Radeon HD 8450G', label:'Radeon HD 8450G'},{value:'Radeon R5 235', label:'Radeon R5 235'},{value:'Radeon HD 7600G + 7450M Dual', label:'Radeon HD 7600G + 7450M Dual'},{value:'Radeon HD 7520G + 7600M Dual', label:'Radeon HD 7520G + 7600M Dual'},{value:'GeForce GT 520M', label:'GeForce GT 520M'},{value:'Radeon HD 8450G + 8670M Dual', label:'Radeon HD 8450G + 8670M Dual'},{value:'Radeon HD 7640G + HD 7400M Dual', label:'Radeon HD 7640G + HD 7400M Dual'},{value:'Radeon HD 7640G + 7610M Dual', label:'Radeon HD 7640G + 7610M Dual'},{value:'Radeon HD 7640G + HD 8500M N HD 8500M Dual', label:'Radeon HD 7640G + HD 8500M N HD 8500M Dual'},{value:'GeForce GT 520', label:'GeForce GT 520'},{value:'Radeon HD 7640G + HD 8570M Dual', label:'Radeon HD 7640G + HD 8570M Dual'},{value:'Mobility Radeon HD 4250', label:'Mobility Radeon HD 4250'},{value:'Radeon HD 7600G + 6400M Dual', label:'Radeon HD 7600G + 6400M Dual'},{value:'Radeon HD 8450G + 8750M Dual', label:'Radeon HD 8450G + 8750M Dual'},{value:'Radeon HD 8450G + 8600M Dual', label:'Radeon HD 8450G + 8600M Dual'},{value:'Radeon HD 8570D + HD8490 Dual', label:'Radeon HD 8570D + HD8490 Dual'},{value:'Radeon HD 7520G + 7670M Dual', label:'Radeon HD 7520G + 7670M Dual'},{value:'PHDGD Ivy 5', label:'PHDGD Ivy 5'},{value:'Radeon HD 7520G', label:'Radeon HD 7520G'},{value:'Radeon HD 7520G + HD 7400M Dual', label:'Radeon HD 7520G + HD 7400M Dual'},{value:'Radeon HD 7640G N HD 7640G + HD 8570M Dual', label:'Radeon HD 7640G N HD 7640G + HD 8570M Dual'},{value:'Radeon HD 7640G + 6400M Dual', label:'Radeon HD 7640G + 6400M Dual'},{value:'RADEON HD6530D', label:'RADEON HD6530D'},{value:'Radeon HD 7640G + 7470M Dual', label:'Radeon HD 7640G + 7470M Dual'},{value:'Radeon R5 230', label:'Radeon R5 230'},{value:'Radeon HD 7640G + 7400M Dual', label:'Radeon HD 7640G + 7400M Dual'},{value:'Radeon HD 8330E', label:'Radeon HD 8330E'},{value:'Radeon HD 8400E', label:'Radeon HD 8400E'},{value:'Radeon HD 7520G N HD 7520G + HD 7500/7600 7500/760', label:'Radeon HD 7520G N HD 7520G + HD 7500/7600 7500/760'},{value:'GeForce 800A', label:'GeForce 800A'},{value:'Radeon HD 8350G', label:'Radeon HD 8350G'},{value:'GeForce 810M', label:'GeForce 810M'},{value:'Radeon HD 7520G + 7470M Dual', label:'Radeon HD 7520G + 7470M Dual'},{value:'Radeon HD 7520G + 8750M Dual', label:'Radeon HD 7520G + 8750M Dual'},{value:'Radeon HD 7520G + HD 8600/8700M Dual', label:'Radeon HD 7520G + HD 8600/8700M Dual'},{value:'Radeon HD 8690A', label:'Radeon HD 8690A'},{value:'Radeon HD 6470M', label:'Radeon HD 6470M'},{value:'Radeon HD 8370D', label:'Radeon HD 8370D'},{value:'Radeon HD 6520G', label:'Radeon HD 6520G'},{value:'IncrediblE HD 4000', label:'IncrediblE HD 4000'},{value:'Radeon R2', label:'Radeon R2'},{value:'Radeon HD 7520G + 7610M Dual', label:'Radeon HD 7520G + 7610M Dual'},{value:'Radeon HD 8330', label:'Radeon HD 8330'},{value:'Radeon HD 7450', label:'Radeon HD 7450'},{value:'Intel Media Accelerator HD', label:'Intel Media Accelerator HD'},{value:'Radeon HD 7620G N HD 7620G + HD 8600M N HD 8600M D', label:'Radeon HD 7620G N HD 7620G + HD 8600M N HD 8600M D'},{value:'Radeon HD 7480D', label:'Radeon HD 7480D'},{value:'Radeon HD 7520G N HD 7520G + HD 7600M N HD 7600M D', label:'Radeon HD 7520G N HD 7520G + HD 7600M N HD 7600M D'},{value:'Radeon HD 7520G + 7500/7600 Dual', label:'Radeon HD 7520G + 7500/7600 Dual'},{value:'Radeon HD 7660G + HD 7600M N HD 7600M Dual', label:'Radeon HD 7660G + HD 7600M N HD 7600M Dual'},{value:'GRID K180Q', label:'GRID K180Q'},{value:'GRID K160Q', label:'GRID K160Q'},{value:'Radeon HD 6450', label:'Radeon HD 6450'},{value:'Radeon HD 8280E', label:'Radeon HD 8280E'},{value:'Radeon HD 8410G', label:'Radeon HD 8410G'},{value:'Radeon HD 7600G + 7550M Dual', label:'Radeon HD 7600G + 7550M Dual'},{value:'M880G with Mobility Radeon HD 4250', label:'M880G with Mobility Radeon HD 4250'},{value:'Radeon HD 7500G', label:'Radeon HD 7500G'},{value:'Mobility Radeon HD 5000 Serisi', label:'Mobility Radeon HD 5000 Serisi'},{value:'Radeon HD 7420G', label:'Radeon HD 7420G'},{value:'GeForce GTS 250', label:'GeForce GTS 250'},{value:'GeForce 605', label:'GeForce 605'},{value:'Radeon HD 7600G + 7500M/7600M Dual', label:'Radeon HD 7600G + 7500M/7600M Dual'},{value:'Radeon HD 6480G', label:'Radeon HD 6480G'},{value:'IncrediblE HD', label:'IncrediblE HD'},{value:'Radeon HD 7520G + 7650M Dual', label:'Radeon HD 7520G + 7650M Dual'},{value:'GRID K120Q', label:'GRID K120Q'},{value:'Radeon HD 7600G + 8500M/8700M Dual', label:'Radeon HD 7600G + 8500M/8700M Dual'},{value:'HD6450', label:'HD6450'},{value:'Radeon HD 6410D', label:'Radeon HD 6410D'},{value:'GeForce 410M', label:'GeForce 410M'},{value:'SUMO 9644', label:'SUMO 9644'},{value:'RADEON HD6410D', label:'RADEON HD6410D'},{value:'Radeon HD 7580D', label:'Radeon HD 7580D'},{value:'Radeon HD 7450A', label:'Radeon HD 7450A'},{value:'Radeon E6460', label:'Radeon E6460'},{value:'Radeon HD 8280', label:'Radeon HD 8280'},{value:'Radeon HD 6450A', label:'Radeon HD 6450A'},{value:'Radeon HD 8310E', label:'Radeon HD 8310E'},{value:'GeForce 510', label:'GeForce 510'},{value:'Matrox G200eR WDDM 2.0', label:'Matrox G200eR WDDM 2.0'},{value:'Radeon HD 7400G', label:'Radeon HD 7400G'},{value:'Radeon HD 8250', label:'Radeon HD 8250'},{value:'Radeon HD 7640G + HD 7600M N HD 7600M Dual', label:'Radeon HD 7640G + HD 7600M N HD 7600M Dual'},{value:'Radeon R2E', label:'Radeon R2E'},{value:'Radeon HD 8280G', label:'Radeon HD 8280G'},{value:'Radeon HD 6370D', label:'Radeon HD 6370D'},{value:'Radeon HD 8240', label:'Radeon HD 8240'},{value:'Radeon HD 6430M', label:'Radeon HD 6430M'},{value:'Radeon HD 7660D + HD 7400 Dual', label:'Radeon HD 7660D + HD 7400 Dual'},{value:'GeForce 800M', label:'GeForce 800M'},{value:'Intel 4th Generation Haswell HD', label:'Intel 4th Generation Haswell HD'},{value:'Matrox G200eh WDDM 2.0', label:'Matrox G200eh WDDM 2.0'},{value:'PHDGD Ivy 4', label:'PHDGD Ivy 4'},{value:'Radeon R5 M435', label:'Radeon R5 M435'},{value:'RADEON HD6370D', label:'RADEON HD6370D'},{value:'Intel HD manual-gen9_2015-133271', label:'Intel HD manual-gen9_2015-133271'},{value:'Radeon 520', label:'Radeon 520'},{value:'Radeon RX 640', label:'Radeon RX 640'},{value:'A6 Micro-6500T Quad-Core APU with RadeonR4', label:'A6 Micro-6500T Quad-Core APU with RadeonR4'},{value:'Mobility/Radeon HD 5000/5400/5450/R5 220', label:'Mobility/Radeon HD 5000/5400/5450/R5 220'},{value:'Radeon HD 7340', label:'Radeon HD 7340'},{value:'Radeon HD 7340M', label:'Radeon HD 7340M'},{value:'Radeon HD 8350', label:'Radeon HD 8350'},{value:'RADEON HD 6350', label:'RADEON HD 6350'},{value:'FirePro 2270', label:'FirePro 2270'},{value:'Radeon HD 6320 Graphic', label:'Radeon HD 6320 Graphic'},{value:'Quadro FX 580', label:'Quadro FX 580'},{value:'Radeon HD 6250', label:'Radeon HD 6250'},{value:'Radeon HD 7310M', label:'Radeon HD 7310M'},{value:'Radeon HD 6290', label:'Radeon HD 6290'},{value:'Red Hat QXL controller', label:'Red Hat QXL controller'},{value:'OpenXT Display Driver', label:'OpenXT Display Driver'},{value:'QXL KMDOD', label:'QXL KMDOD'},
]




const cpus = [
    {value:'Intel Core i9-9900KS 4.0 GHz (8 cores)',label:'Intel Core i9-9900KS 4.0 GHz (8 cores)'},
{value:'Intel Core i9-9900KF 3.6 GHz (8 cores)',label:'Intel Core i9-9900KF 3.6 GHz (8 cores)'},
{value:'Intel Core i9-9900K 3.6 GHz (8 cores)',label:'Intel Core i9-9900K 3.6 GHz (8 cores)'},
{value:'Intel Core i7-8086K 4.0 GHz (6 cores)',label:'Intel Core i7-8086K 4.0 GHz (6 cores)'},
{value:'Intel Core i7-9700KF 3.6 GHz (8 cores)',label:'Intel Core i7-9700KF 3.6 GHz (8 cores)'},
{value:'Intel Core i7-9700K 3.6 GHz (8 cores)',label:'Intel Core i7-9700K 3.6 GHz (8 cores)'},
{value:'AMD Ryzen 9 3950X 3.5 GHz (16 cores)',label:'AMD Ryzen 9 3950X 3.5 GHz (16 cores)'},
{value:'Intel Core i9-9900 3.1 GHz (8 cores)',label:'Intel Core i9-9900 3.1 GHz (8 cores)'},
{value:'AMD Ryzen 7 3800X 3.9 GHz (8 cores)',label:'AMD Ryzen 7 3800X 3.9 GHz (8 cores)'},
{value:'Intel Core i5-9600KF 3.7 GHz (6 cores)',label:'Intel Core i5-9600KF 3.7 GHz (6 cores)'},
{value:'Intel Core i7-7740X 4.3 GHz (4 cores)',label:'Intel Core i7-7740X 4.3 GHz (4 cores)'},
{value:'Intel Core i7-8700K 3.7 GHz (6 cores)',label:'Intel Core i7-8700K 3.7 GHz (6 cores)'},
{value:'AMD Ryzen 9 3900X 3.8 GHz (12 cores)',label:'AMD Ryzen 9 3900X 3.8 GHz (12 cores)'},
{value:'AMD Ryzen Threadripper 3970X 3.7 GHz (32 cores)',label:'AMD Ryzen Threadripper 3970X 3.7 GHz (32 cores)'},
{value:'AMD Ryzen Threadripper 3960X 3.8 GHz (24 cores)',label:'AMD Ryzen Threadripper 3960X 3.8 GHz (24 cores)'},
{value:'AMD Ryzen 7 3700X 3.6 GHz (8 cores)',label:'AMD Ryzen 7 3700X 3.6 GHz (8 cores)'},
{value:'Intel Core i5-9600K 3.7 GHz (6 cores)',label:'Intel Core i5-9600K 3.7 GHz (6 cores)'},
{value:'Intel Core i5-8600K 3.6 GHz (6 cores)',label:'Intel Core i5-8600K 3.6 GHz (6 cores)'},
{value:'AMD Ryzen 5 3600X 3.8 GHz (6 cores)',label:'AMD Ryzen 5 3600X 3.8 GHz (6 cores)'},
{value:'Intel Core i7-7700K 4.2 GHz (4 cores)',label:'Intel Core i7-7700K 4.2 GHz (4 cores)'},
{value:'Intel Core i7-9700 3.0 GHz (8 cores)',label:'Intel Core i7-9700 3.0 GHz (8 cores)'},
{value:'Intel Core i7-9700F 3.0 GHz (8 cores)',label:'Intel Core i7-9700F 3.0 GHz (8 cores)'},
{value:'Intel Core i7-8700B 3.2 GHz (6 cores)',label:'Intel Core i7-8700B 3.2 GHz (6 cores)'},
{value:'AMD Ryzen 5 3600 3.6 GHz (6 cores)',label:'AMD Ryzen 5 3600 3.6 GHz (6 cores)'},
{value:'Intel Core i9-10940X 3.3 GHz (14 cores)',label:'Intel Core i9-10940X 3.3 GHz (14 cores)'},
{value:'Intel Core i7-9800X 3.8 GHz (8 cores)',label:'Intel Core i7-9800X 3.8 GHz (8 cores)'},
{value:'Intel Core i9-9980HK 2.4 GHz (8 cores)',label:'Intel Core i9-9980HK 2.4 GHz (8 cores)'},
{value:'Intel Core i9-10900X 3.7 GHz (10 cores)',label:'Intel Core i9-10900X 3.7 GHz (10 cores)'},
{value:'Intel Core i9-7980XE 2.6 GHz (18 cores)',label:'Intel Core i9-7980XE 2.6 GHz (18 cores)'},
{value:'Intel Core i7-8700 3.2 GHz (6 cores)',label:'Intel Core i7-8700 3.2 GHz (6 cores)'},
{value:'Intel Core i5-7600K 3.8 GHz (4 cores)',label:'Intel Core i5-7600K 3.8 GHz (4 cores)'},
{value:'Intel Core i3-7350K 4.2 GHz (2 cores)',label:'Intel Core i3-7350K 4.2 GHz (2 cores)'},
{value:'Intel Core i9-10980XE 3.0 GHz (18 cores)',label:'Intel Core i9-10980XE 3.0 GHz (18 cores)'},
{value:'Intel Core i9-10920X 3.5 GHz (12 cores)',label:'Intel Core i9-10920X 3.5 GHz (12 cores)'},
{value:'Intel Core i7-5950HQ 2.9 GHz (4 cores)',label:'Intel Core i7-5950HQ 2.9 GHz (4 cores)'},
{value:'Intel Core i3-8350K 4.0 GHz (4 cores)',label:'Intel Core i3-8350K 4.0 GHz (4 cores)'},
{value:'AMD Ryzen 5 3500X 3.6 GHz (6 cores)',label:'AMD Ryzen 5 3500X 3.6 GHz (6 cores)'},
{value:'Intel Core i9-9960X 3.1 GHz (16 cores)',label:'Intel Core i9-9960X 3.1 GHz (16 cores)'},
{value:'Intel Core i5-9500 3.0 GHz (6 cores)',label:'Intel Core i5-9500 3.0 GHz (6 cores)'},
{value:'Intel Core i5-7640X 4.0 GHz (4 cores)',label:'Intel Core i5-7640X 4.0 GHz (4 cores)'},
{value:'Intel Core i9-9920X 3.5 GHz (12 cores)',label:'Intel Core i9-9920X 3.5 GHz (12 cores)'},
{value:'Intel Core i7-6700K 4.0 GHz (4 cores)',label:'Intel Core i7-6700K 4.0 GHz (4 cores)'},
{value:'Intel Core i7-7820X 3.6 GHz (8 cores)',label:'Intel Core i7-7820X 3.6 GHz (8 cores)'},
{value:'Intel Core i7-8569U 2.8 GHz (4 cores)',label:'Intel Core i7-8569U 2.8 GHz (4 cores)'},
{value:'Intel Core i9-9940X 3.3 GHz (14 cores)',label:'Intel Core i9-9940X 3.3 GHz (14 cores)'},
{value:'Intel Core i9-9980XE 3.0 GHz (18 cores)',label:'Intel Core i9-9980XE 3.0 GHz (18 cores)'},
{value:'Intel Core i9-7900X 3.3 GHz (10 cores)',label:'Intel Core i9-7900X 3.3 GHz (10 cores)'},
{value:'Intel Core i9-7940X 3.1 GHz (14 cores)',label:'Intel Core i9-7940X 3.1 GHz (14 cores)'},
{value:'Intel Xeon W-3175X 3.1 GHz (28 cores)',label:'Intel Xeon W-3175X 3.1 GHz (28 cores)'},
{value:'Intel Core i9-9900X 3.5 GHz (10 cores)',label:'Intel Core i9-9900X 3.5 GHz (10 cores)'},
{value:'AMD Ryzen 5 3500 3.6 GHz (6 cores)',label:'AMD Ryzen 5 3500 3.6 GHz (6 cores)'},
{value:'Intel Core i5-8600 3.1 GHz (6 cores)',label:'Intel Core i5-8600 3.1 GHz (6 cores)'},
{value:'Intel Core i9-7960X 2.8 GHz (16 cores)',label:'Intel Core i9-7960X 2.8 GHz (16 cores)'},
{value:'Intel Core i9-8950HK 2.9 GHz (6 cores)',label:'Intel Core i9-8950HK 2.9 GHz (6 cores)'},
{value:'Intel Core i9-9880H 2.3 GHz (8 cores)',label:'Intel Core i9-9880H 2.3 GHz (8 cores)'},
{value:'Intel Xeon W-3245 3.2 GHz (16 cores)',label:'Intel Xeon W-3245 3.2 GHz (16 cores)'},
{value:'Intel Core i7-7800X 3.5 GHz (6 cores)',label:'Intel Core i7-7800X 3.5 GHz (6 cores)'},
{value:'Intel Core i9-7920X 2.9 GHz (12 cores)',label:'Intel Core i9-7920X 2.9 GHz (12 cores)'},
{value:'Intel Core i7-9850H 2.6 GHz (6 cores)',label:'Intel Core i7-9850H 2.6 GHz (6 cores)'},
{value:'Intel Xeon W-2155 3.3 GHz (10 cores)',label:'Intel Xeon W-2155 3.3 GHz (10 cores)'},
{value:'Intel Core i5-6600K 3.5 GHz (4 cores)',label:'Intel Core i5-6600K 3.5 GHz (4 cores)'},
{value:'Intel Xeon W-2191B 2.3 GHz (18 cores)',label:'Intel Xeon W-2191B 2.3 GHz (18 cores)'},
{value:'Intel Xeon W-3275M 2.5 GHz (28 cores)',label:'Intel Xeon W-3275M 2.5 GHz (28 cores)'},
{value:'Intel Core i7-8559U 2.7 GHz (4 cores)',label:'Intel Core i7-8559U 2.7 GHz (4 cores)'},
{value:'Intel Core i3-9100F 3.6 GHz (4 cores)',label:'Intel Core i3-9100F 3.6 GHz (4 cores)'},
{value:'Intel Xeon W-3235 3.3 GHz (12 cores)',label:'Intel Xeon W-3235 3.3 GHz (12 cores)'},
{value:'Intel Xeon E3-1270 v6 3.8 GHz (4 cores)',label:'Intel Xeon E3-1270 v6 3.8 GHz (4 cores)'},
{value:'Intel Core i5-8500 3.0 GHz (6 cores)',label:'Intel Core i5-8500 3.0 GHz (6 cores)'},
{value:'Intel Xeon E-2176M 2.7 GHz (6 cores)',label:'Intel Xeon E-2176M 2.7 GHz (6 cores)'},
{value:'Intel Core i5-9400F 2.9 GHz (6 cores)',label:'Intel Core i5-9400F 2.9 GHz (6 cores)'},
{value:'Intel Xeon W-2145 3.7 GHz (8 cores)',label:'Intel Xeon W-2145 3.7 GHz (8 cores)'},
{value:'Intel Core i7-8809G 3.1 GHz (4 cores)',label:'Intel Core i7-8809G 3.1 GHz (4 cores)'},
{value:'Intel Xeon E3-1275 v6 3.8 GHz (4 cores)',label:'Intel Xeon E3-1275 v6 3.8 GHz (4 cores)'},
{value:'Intel Xeon W-2150B 3.0 GHz (10 cores)',label:'Intel Xeon W-2150B 3.0 GHz (10 cores)'},
{value:'Intel Xeon E3-1240 v6 3.7 GHz (4 cores)',label:'Intel Xeon E3-1240 v6 3.7 GHz (4 cores)'},
{value:'Intel Core i5-9400 2.9 GHz (6 cores)',label:'Intel Core i5-9400 2.9 GHz (6 cores)'},
{value:'Intel Core i5-8500B 3.0 GHz (6 cores)',label:'Intel Core i5-8500B 3.0 GHz (6 cores)'},
{value:'Intel Xeon E3-1275 v5 3.6 GHz (4 cores)',label:'Intel Xeon E3-1275 v5 3.6 GHz (4 cores)'},
{value:'Intel Core i7-9750H 2.6 GHz (6 cores)',label:'Intel Core i7-9750H 2.6 GHz (6 cores)'},
{value:'Intel Xeon W-2135 3.7 GHz (6 cores)',label:'Intel Xeon W-2135 3.7 GHz (6 cores)'},
{value:'AMD Ryzen Threadripper 2920X 3.5 GHz (12 cores)',label:'AMD Ryzen Threadripper 2920X 3.5 GHz (12 cores)'},
{value:'Intel Core i7-4790K 4.0 GHz (4 cores)',label:'Intel Core i7-4790K 4.0 GHz (4 cores)'},
{value:'Intel Core i7-7700 3.6 GHz (4 cores)',label:'Intel Core i7-7700 3.6 GHz (4 cores)'},
{value:'Intel Core i3-9100 3.6 GHz (4 cores)',label:'Intel Core i3-9100 3.6 GHz (4 cores)'},
{value:'Intel Xeon W-2125 4.0 GHz (4 cores)',label:'Intel Xeon W-2125 4.0 GHz (4 cores)'},
{value:'AMD Ryzen 7 2700X 3.7 GHz (8 cores)',label:'AMD Ryzen 7 2700X 3.7 GHz (8 cores)'},
{value:'Intel Core i7-5775C 3.3 GHz (4 cores)',label:'Intel Core i7-5775C 3.3 GHz (4 cores)'},
{value:'Intel Core i5-8400H 2.5 GHz (4 cores)',label:'Intel Core i5-8400H 2.5 GHz (4 cores)'},
{value:'AMD Ryzen Threadripper 2950X 3.5 GHz (16 cores)',label:'AMD Ryzen Threadripper 2950X 3.5 GHz (16 cores)'},
{value:'Intel Xeon W-2140B 3.2 GHz (8 cores)',label:'Intel Xeon W-2140B 3.2 GHz (8 cores)'},
{value:'Intel Core i7-8700T 2.4 GHz (6 cores)',label:'Intel Core i7-8700T 2.4 GHz (6 cores)'},
{value:'Intel Core i5-8400 2.8 GHz (6 cores)',label:'Intel Core i5-8400 2.8 GHz (6 cores)'},
{value:'AMD Ryzen 5 2600X 3.6 GHz (6 cores)',label:'AMD Ryzen 5 2600X 3.6 GHz (6 cores)'},
{value:'Intel Core i3-7320 4.1 GHz (2 cores)',label:'Intel Core i3-7320 4.1 GHz (2 cores)'},
{value:'Intel Core i5-7600 3.5 GHz (4 cores)',label:'Intel Core i5-7600 3.5 GHz (4 cores)'},
{value:'Intel Core i3-6320 3.9 GHz (2 cores)',label:'Intel Core i3-6320 3.9 GHz (2 cores)'},
{value:'Intel Core i5-8279U 2.4 GHz (4 cores)',label:'Intel Core i5-8279U 2.4 GHz (4 cores)'},
{value:'Intel Xeon W-3223 3.5 GHz (8 cores)',label:'Intel Xeon W-3223 3.5 GHz (8 cores)'},
{value:'Intel Core i7-8850H 2.6 GHz (6 cores)',label:'Intel Core i7-8850H 2.6 GHz (6 cores)'},
{value:'Intel Core i7-8665U 1.9 GHz (4 cores)',label:'Intel Core i7-8665U 1.9 GHz (4 cores)'},
{value:'Intel Xeon E3-1230 v6 3.5 GHz (4 cores)',label:'Intel Xeon E3-1230 v6 3.5 GHz (4 cores)'},
{value:'Intel Core i7-7567U 3.5 GHz (2 cores)',label:'Intel Core i7-7567U 3.5 GHz (2 cores)'},
{value:'Intel Xeon E3-1270 v5 3.6 GHz (4 cores)',label:'Intel Xeon E3-1270 v5 3.6 GHz (4 cores)'},
{value:'AMD Ryzen Threadripper 2970WX 3.0 GHz (24 cores)',label:'AMD Ryzen Threadripper 2970WX 3.0 GHz (24 cores)'},
{value:'Intel Core i3-7300 4.0 GHz (2 cores)',label:'Intel Core i3-7300 4.0 GHz (2 cores)'},
{value:'AMD Ryzen Threadripper 2990WX 3.0 GHz (32 cores)',label:'AMD Ryzen Threadripper 2990WX 3.0 GHz (32 cores)'},
{value:'Intel Xeon E3-1535M v6 3.1 GHz (4 cores)',label:'Intel Xeon E3-1535M v6 3.1 GHz (4 cores)'},
{value:'Intel Core i3-8300 3.7 GHz (4 cores)',label:'Intel Core i3-8300 3.7 GHz (4 cores)'},
{value:'AMD Ryzen 3 2300X 3.5 GHz (4 cores)',label:'AMD Ryzen 3 2300X 3.5 GHz (4 cores)'},
{value:'Intel Core i5-9300H 2.4 GHz (4 cores)',label:'Intel Core i5-9300H 2.4 GHz (4 cores)'},
{value:'Intel Core i7-6900K 3.2 GHz (8 cores)',label:'Intel Core i7-6900K 3.2 GHz (8 cores)'},
{value:'Intel Core i7-7820HK 2.9 GHz (4 cores)',label:'Intel Core i7-7820HK 2.9 GHz (4 cores)'},
{value:'Intel Core i7-6850K 3.6 GHz (6 cores)',label:'Intel Core i7-6850K 3.6 GHz (6 cores)'},
{value:'Intel Xeon E3-1240 v5 3.5 GHz (4 cores)',label:'Intel Xeon E3-1240 v5 3.5 GHz (4 cores)'},
{value:'Intel Core i7-8750H 2.2 GHz (6 cores)',label:'Intel Core i7-8750H 2.2 GHz (6 cores)'},
{value:'Intel Xeon E3-1281 v3 3.7 GHz (4 cores)',label:'Intel Xeon E3-1281 v3 3.7 GHz (4 cores)'},
{value:'Intel Core i7-5960X 3.0 GHz (8 cores)',label:'Intel Core i7-5960X 3.0 GHz (8 cores)'},
{value:'AMD Ryzen Threadripper 1900X 3.8 GHz (8 cores)',label:'AMD Ryzen Threadripper 1900X 3.8 GHz (8 cores)'},
{value:'Intel Core i5-4690K 3.5 GHz (4 cores)',label:'Intel Core i5-4690K 3.5 GHz (4 cores)'},
{value:'Intel Core i5-5675C 3.1 GHz (4 cores)',label:'Intel Core i5-5675C 3.1 GHz (4 cores)'},
{value:'Intel Core i7-4770K 3.5 GHz (4 cores)',label:'Intel Core i7-4770K 3.5 GHz (4 cores)'},
{value:'Intel Core i7-7920HQ 3.1 GHz (4 cores)',label:'Intel Core i7-7920HQ 3.1 GHz (4 cores)'},
{value:'Intel Core i7-5930K 3.5 GHz (6 cores)',label:'Intel Core i7-5930K 3.5 GHz (6 cores)'},
{value:'Intel Core i7-6700 3.4 GHz (4 cores)',label:'Intel Core i7-6700 3.4 GHz (4 cores)'},
{value:'Intel Core i7-5775R 3.3 GHz (4 cores)',label:'Intel Core i7-5775R 3.3 GHz (4 cores)'},
{value:'AMD Ryzen Threadripper 1920X 3.5 GHz (12 cores)',label:'AMD Ryzen Threadripper 1920X 3.5 GHz (12 cores)'},
{value:'AMD Ryzen 5 2600 3.4 GHz (6 cores)',label:'AMD Ryzen 5 2600 3.4 GHz (6 cores)'},
{value:'Intel Core i5-8257U 1.4 GHz (4 cores)',label:'Intel Core i5-8257U 1.4 GHz (4 cores)'},
{value:'Intel Xeon E3-1271 v3 3.6 GHz (4 cores)',label:'Intel Xeon E3-1271 v3 3.6 GHz (4 cores)'},
{value:'AMD Ryzen Threadripper 1950X 3.4 GHz (16 cores)',label:'AMD Ryzen Threadripper 1950X 3.4 GHz (16 cores)'},
{value:'Intel Core i3-8100B 3.6 GHz (4 cores)',label:'Intel Core i3-8100B 3.6 GHz (4 cores)'},
{value:'Intel Core i7-8705G 3.1 GHz (4 cores)',label:'Intel Core i7-8705G 3.1 GHz (4 cores)'},
{value:'Intel Core i5-4670K 3.4 GHz (4 cores)',label:'Intel Core i5-4670K 3.4 GHz (4 cores)'},
{value:'Intel Core i5-7500 3.4 GHz (4 cores)',label:'Intel Core i5-7500 3.4 GHz (4 cores)'},
{value:'Intel Xeon Processor E5-1680 v3 3.2 GHz (8 cores)',label:'Intel Xeon Processor E5-1680 v3 3.2 GHz (8 cores)'},
{value:'Intel Core i3-7100 3.9 GHz (2 cores)',label:'Intel Core i3-7100 3.9 GHz (2 cores)'},
{value:'Intel Core i5-8259U 2.3 GHz (4 cores)',label:'Intel Core i5-8259U 2.3 GHz (4 cores)'},
{value:'Intel Core i5-8300H 2.3 GHz (4 cores)',label:'Intel Core i5-8300H 2.3 GHz (4 cores)'},
{value:'Intel Core i3-8100 3.6 GHz (4 cores)',label:'Intel Core i3-8100 3.6 GHz (4 cores)'},
{value:'Intel Pentium G5600 3.9 GHz (2 cores)',label:'Intel Pentium G5600 3.9 GHz (2 cores)'},
{value:'Intel Core i7-6950X 3.0 GHz (10 cores)',label:'Intel Core i7-6950X 3.0 GHz (10 cores)'},
{value:'Intel Core i7-4940MX 3.1 GHz (4 cores)',label:'Intel Core i7-4940MX 3.1 GHz (4 cores)'},
{value:'Intel Core i5-6600 3.3 GHz (4 cores)',label:'Intel Core i5-6600 3.3 GHz (4 cores)'},
{value:'Intel Xeon W-2133 3.6 GHz (6 cores)',label:'Intel Xeon W-2133 3.6 GHz (6 cores)'},
{value:'Intel Core i3-6300 3.8 GHz (2 cores)',label:'Intel Core i3-6300 3.8 GHz (2 cores)'},
{value:'AMD Ryzen 5 1600X 3.6 GHz (6 cores)',label:'AMD Ryzen 5 1600X 3.6 GHz (6 cores)'},
{value:'Intel Pentium Gold G5500 3.8 GHz (2 cores)',label:'Intel Pentium Gold G5500 3.8 GHz (2 cores)'},
{value:'Intel Xeon E5-1630 v4 3.7 GHz (4 cores)',label:'Intel Xeon E5-1630 v4 3.7 GHz (4 cores)'},
{value:'Intel Xeon E3-1245 v6 3.7 GHz (4 cores)',label:'Intel Xeon E3-1245 v6 3.7 GHz (4 cores)'},
{value:'Intel Xeon W-2123 3.6 GHz (4 cores)',label:'Intel Xeon W-2123 3.6 GHz (4 cores)'},
{value:'Intel Xeon E3-1505M v6 3.0 GHz (4 cores)',label:'Intel Xeon E3-1505M v6 3.0 GHz (4 cores)'},
{value:'Intel Core i7-4790 3.6 GHz (4 cores)',label:'Intel Core i7-4790 3.6 GHz (4 cores)'},
{value:'AMD Ryzen 7 2700 3.2 GHz (8 cores)',label:'AMD Ryzen 7 2700 3.2 GHz (8 cores)'},
{value:'Intel Xeon E3-1545M v5 2.9 GHz (4 cores)',label:'Intel Xeon E3-1545M v5 2.9 GHz (4 cores)'},
{value:'Intel Xeon Gold 6134 3.2 GHz (8 cores)',label:'Intel Xeon Gold 6134 3.2 GHz (8 cores)'},
{value:'AMD Ryzen 5 3400G 3.7 GHz (4 cores)',label:'AMD Ryzen 5 3400G 3.7 GHz (4 cores)'},
{value:'Intel Core i5-4690S 3.2 GHz (4 cores)',label:'Intel Core i5-4690S 3.2 GHz (4 cores)'},
{value:'Intel Core i7-8650U 1.9 GHz (4 cores)',label:'Intel Core i7-8650U 1.9 GHz (4 cores)'},
{value:'Intel Xeon E3-1245 v5 3.5 GHz (4 cores)',label:'Intel Xeon E3-1245 v5 3.5 GHz (4 cores)'},
{value:'AMD Ryzen 7 1800X 3.6 GHz (8 cores)',label:'AMD Ryzen 7 1800X 3.6 GHz (8 cores)'},
{value:'Intel Xeon E5-1650 v4 3.6 GHz (6 cores)',label:'Intel Xeon E5-1650 v4 3.6 GHz (6 cores)'},
{value:'Intel Xeon E3-1270 v3 3.5 GHz (4 cores)',label:'Intel Xeon E3-1270 v3 3.5 GHz (4 cores)'},
{value:'Intel Xeon E3-1535M v5 2.9 GHz (4 cores)',label:'Intel Xeon E3-1535M v5 2.9 GHz (4 cores)'},
{value:'Intel Core i7-7820HQ 2.9 GHz (4 cores)',label:'Intel Core i7-7820HQ 2.9 GHz (4 cores)'},
{value:'Intel Xeon E3-1241 v3 3.5 GHz (4 cores)',label:'Intel Xeon E3-1241 v3 3.5 GHz (4 cores)'},
{value:'Intel Core i5-8500T 2.1 GHz (6 cores)',label:'Intel Core i5-8500T 2.1 GHz (6 cores)'},
{value:'Intel Core i7-5820K 3.3 GHz (6 cores)',label:'Intel Core i7-5820K 3.3 GHz (6 cores)'},
{value:'Intel Core i7-4790S 3.2 GHz (4 cores)',label:'Intel Core i7-4790S 3.2 GHz (4 cores)'},
{value:'Intel Xeon E5-1650 v3 3.5 GHz (6 cores)',label:'Intel Xeon E5-1650 v3 3.5 GHz (6 cores)'},
{value:'Intel Xeon E3-1225 v5 3.3 GHz (4 cores)',label:'Intel Xeon E3-1225 v5 3.3 GHz (4 cores)'},
{value:'Intel Core i5-6600T 2.7 GHz (4 cores)',label:'Intel Core i5-6600T 2.7 GHz (4 cores)'},
{value:'Intel Core i5-7260U 2.2 GHz (2 cores)',label:'Intel Core i5-7260U 2.2 GHz (2 cores)'},
{value:'Intel Pentium Gold G5400 3.7 GHz (2 cores)',label:'Intel Pentium Gold G5400 3.7 GHz (2 cores)'},
{value:'Intel Xeon E3-1230 v5 3.4 GHz (4 cores)',label:'Intel Xeon E3-1230 v5 3.4 GHz (4 cores)'},
{value:'Intel Core i7-6800K 3.4 GHz (6 cores)',label:'Intel Core i7-6800K 3.4 GHz (6 cores)'},
{value:'AMD Ryzen 5 1500X 3.5 GHz (4 cores)',label:'AMD Ryzen 5 1500X 3.5 GHz (4 cores)'},
{value:'Intel Xeon E3-1246 v3 3.5 GHz (4 cores)',label:'Intel Xeon E3-1246 v3 3.5 GHz (4 cores)'},
{value:'Intel Core i7-7700T 2.9 GHz (4 cores)',label:'Intel Core i7-7700T 2.9 GHz (4 cores)'},
{value:'Intel Pentium G4620 3.7 GHz (2 cores)',label:'Intel Pentium G4620 3.7 GHz (2 cores)'},
{value:'Intel Core i5-4690 3.5 GHz (4 cores)',label:'Intel Core i5-4690 3.5 GHz (4 cores)'},
{value:'Intel Core i7-6700T 2.8 GHz (4 cores)',label:'Intel Core i7-6700T 2.8 GHz (4 cores)'},
{value:'Intel Xeon E5-1660 v3 3.0 GHz (8 cores)',label:'Intel Xeon E5-1660 v3 3.0 GHz (8 cores)'},
{value:'Intel Xeon E3-1275 v3 3.5 GHz (4 cores)',label:'Intel Xeon E3-1275 v3 3.5 GHz (4 cores)'},
{value:'Intel Xeon E5-2696 v4 2.2 GHz (22 cores)',label:'Intel Xeon E5-2696 v4 2.2 GHz (22 cores)'},
{value:'Intel Core i7-7560U 2.4 GHz (2 cores)',label:'Intel Core i7-7560U 2.4 GHz (2 cores)'},
{value:'Intel Core i7-4790T 2.7 GHz (4 cores)',label:'Intel Core i7-4790T 2.7 GHz (4 cores)'},
{value:'Intel Core i7-7660U 2.5 GHz (2 cores)',label:'Intel Core i7-7660U 2.5 GHz (2 cores)'},
{value:'Intel Xeon E3-1275L v3 2.7 GHz (4 cores)',label:'Intel Xeon E3-1275L v3 2.7 GHz (4 cores)'},
{value:'Intel Core i7-4960HQ 2.6 GHz (4 cores)',label:'Intel Core i7-4960HQ 2.6 GHz (4 cores)'},
{value:'Intel Core i7-4770 3.4 GHz (4 cores)',label:'Intel Core i7-4770 3.4 GHz (4 cores)'},
{value:'Intel Core i5-7360U 2.3 GHz (2 cores)',label:'Intel Core i5-7360U 2.3 GHz (2 cores)'},
{value:'Intel Xeon E3-1226 v3 3.3 GHz (4 cores)',label:'Intel Xeon E3-1226 v3 3.3 GHz (4 cores)'},
{value:'AMD Ryzen 3 PRO 1300 3.5 GHz (4 cores)',label:'AMD Ryzen 3 PRO 1300 3.5 GHz (4 cores)'},
{value:'Intel Core i3-6100 3.7 GHz (2 cores)',label:'Intel Core i3-6100 3.7 GHz (2 cores)'},
{value:'Intel Core i7-6920HQ 2.9 GHz (4 cores)',label:'Intel Core i7-6920HQ 2.9 GHz (4 cores)'},
{value:'Intel Core i7-4980HQ 2.8 GHz (4 cores)',label:'Intel Core i7-4980HQ 2.8 GHz (4 cores)'},
{value:'Intel Core i5-6500 3.2 GHz (4 cores)',label:'Intel Core i5-6500 3.2 GHz (4 cores)'},
{value:'Intel Core i7-6820HK 2.7 GHz (4 cores)',label:'Intel Core i7-6820HK 2.7 GHz (4 cores)'},
{value:'Intel Core i7-4771 3.5 GHz (4 cores)',label:'Intel Core i7-4771 3.5 GHz (4 cores)'},
{value:'AMD Ryzen 5 1600 3.2 GHz (6 cores)',label:'AMD Ryzen 5 1600 3.2 GHz (6 cores)'},
{value:'Intel Xeon Gold 5122 3.6 GHz (4 cores)',label:'Intel Xeon Gold 5122 3.6 GHz (4 cores)'},
{value:'Intel Core i3-6098P 3.6 GHz (2 cores)',label:'Intel Core i3-6098P 3.6 GHz (2 cores)'},
{value:'AMD Ryzen 3 1300X 3.5 GHz (4 cores)',label:'AMD Ryzen 3 1300X 3.5 GHz (4 cores)'},
{value:'AMD Ryzen 7 1700X 3.4 GHz (8 cores)',label:'AMD Ryzen 7 1700X 3.4 GHz (8 cores)'},
{value:'Intel Core i3-8109U 3.0 GHz (2 cores)',label:'Intel Core i3-8109U 3.0 GHz (2 cores)'},
{value:'Intel Core i5-7400 3.0 GHz (4 cores)',label:'Intel Core i5-7400 3.0 GHz (4 cores)'},
{value:'Intel Xeon E5-1660 v4 3.2 GHz (8 cores)',label:'Intel Xeon E5-1660 v4 3.2 GHz (8 cores)'},
{value:'Intel Core i5-4670S 3.1 GHz (4 cores)',label:'Intel Core i5-4670S 3.1 GHz (4 cores)'},
{value:'Intel Core i5-7440HQ 2.8 GHz (4 cores)',label:'Intel Core i5-7440HQ 2.8 GHz (4 cores)'},
{value:'Intel Xeon E3-1231 v3 3.4 GHz (4 cores)',label:'Intel Xeon E3-1231 v3 3.4 GHz (4 cores)'},
{value:'Intel Xeon E3-1245 v3 3.4 GHz (4 cores)',label:'Intel Xeon E3-1245 v3 3.4 GHz (4 cores)'},
{value:'Intel Pentium G4600 3.6 GHz (2 cores)',label:'Intel Pentium G4600 3.6 GHz (2 cores)'},
{value:'Intel Core i7-6770HQ 2.6 GHz (4 cores)',label:'Intel Core i7-6770HQ 2.6 GHz (4 cores)'},
{value:'Intel Core i5-4670 3.4 GHz (4 cores)',label:'Intel Core i5-4670 3.4 GHz (4 cores)'},
{value:'Intel Core i5-4590 3.3 GHz (4 cores)',label:'Intel Core i5-4590 3.3 GHz (4 cores)'},
{value:'Intel Core i7-7700HQ 2.8 GHz (4 cores)',label:'Intel Core i7-7700HQ 2.8 GHz (4 cores)'},
{value:'Intel Core i3-4340 3.6 GHz (2 cores)',label:'Intel Core i3-4340 3.6 GHz (2 cores)'},
{value:'Intel Core i5-2550K 3.4 GHz (4 cores)',label:'Intel Core i5-2550K 3.4 GHz (4 cores)'},
{value:'Intel Core i7-4770S 3.1 GHz (4 cores)',label:'Intel Core i7-4770S 3.1 GHz (4 cores)'},
{value:'Intel Core i7-3770K 3.5 GHz (4 cores)',label:'Intel Core i7-3770K 3.5 GHz (4 cores)'},
{value:'Intel Core i3-4370 3.8 GHz (2 cores)',label:'Intel Core i3-4370 3.8 GHz (2 cores)'},
{value:'Intel Xeon E3-1290 v2 3.7 GHz (4 cores)',label:'Intel Xeon E3-1290 v2 3.7 GHz (4 cores)'},
{value:'Intel Core i5-8305G 2.8 GHz (4 cores)',label:'Intel Core i5-8305G 2.8 GHz (4 cores)'},
{value:'Intel Xeon E3-1230 v3 3.3 GHz (4 cores)',label:'Intel Xeon E3-1230 v3 3.3 GHz (4 cores)'},
{value:'Intel Xeon E5-1680 v2 3.0 GHz (8 cores)',label:'Intel Xeon E5-1680 v2 3.0 GHz (8 cores)'},
{value:'Intel Core i7-4770T 2.5 GHz (4 cores)',label:'Intel Core i7-4770T 2.5 GHz (4 cores)'},
{value:'Intel Core i7-4910MQ 2.9 GHz (4 cores)',label:'Intel Core i7-4910MQ 2.9 GHz (4 cores)'},
{value:'Intel Xeon E3-1280 V2 3.6 GHz (4 cores)',label:'Intel Xeon E3-1280 V2 3.6 GHz (4 cores)'},
{value:'Intel Xeon E3-1505M v5 2.8 GHz (4 cores)',label:'Intel Xeon E3-1505M v5 2.8 GHz (4 cores)'},
{value:'Intel Core i5-7267U 3.1 GHz (2 cores)',label:'Intel Core i5-7267U 3.1 GHz (2 cores)'},
{value:'Intel Xeon E5-1620 v4 3.5 GHz (4 cores)',label:'Intel Xeon E5-1620 v4 3.5 GHz (4 cores)'},
{value:'Intel Core i5-8400T 1.7 GHz (6 cores)',label:'Intel Core i5-8400T 1.7 GHz (6 cores)'},
{value:'Intel Core i7-2700K 3.5 GHz (4 cores)',label:'Intel Core i7-2700K 3.5 GHz (4 cores)'},
{value:'Intel Core i7-4870HQ 2.5 GHz (4 cores)',label:'Intel Core i7-4870HQ 2.5 GHz (4 cores)'},
{value:'Intel Core i5-4570 3.2 GHz (4 cores)',label:'Intel Core i5-4570 3.2 GHz (4 cores)'},
{value:'Intel Xeon E3-1220 v6 3.0 GHz (4 cores)',label:'Intel Xeon E3-1220 v6 3.0 GHz (4 cores)'},
{value:'AMD Ryzen 5 2400G 3.6 GHz (4 cores)',label:'AMD Ryzen 5 2400G 3.6 GHz (4 cores)'},
{value:'AMD Ryzen 7 1700 3.0 GHz (8 cores)',label:'AMD Ryzen 7 1700 3.0 GHz (8 cores)'},
{value:'Intel Pentium G4500 3.5 GHz (2 cores)',label:'Intel Pentium G4500 3.5 GHz (2 cores)'},
{value:'AMD Ryzen 3 2200G 3.5 GHz (4 cores)',label:'AMD Ryzen 3 2200G 3.5 GHz (4 cores)'},
{value:'Intel Xeon E3-1240 v3 3.4 GHz (4 cores)',label:'Intel Xeon E3-1240 v3 3.4 GHz (4 cores)'},
{value:'Intel Core i5-3570K 3.4 GHz (4 cores)',label:'Intel Core i5-3570K 3.4 GHz (4 cores)'},
{value:'Intel Core i5-4590S 3.0 GHz (4 cores)',label:'Intel Core i5-4590S 3.0 GHz (4 cores)'},
{value:'Intel Core i7-4960X 3.6 GHz (6 cores)',label:'Intel Core i7-4960X 3.6 GHz (6 cores)'},
{value:'Intel Core i7-4850HQ 2.3 GHz (4 cores)',label:'Intel Core i7-4850HQ 2.3 GHz (4 cores)'},
{value:'Intel Xeon E5-1630 v3 3.7 GHz (4 cores)',label:'Intel Xeon E5-1630 v3 3.7 GHz (4 cores)'},
{value:'Intel Core i7-4810MQ 2.8 GHz (4 cores)',label:'Intel Core i7-4810MQ 2.8 GHz (4 cores)'},
{value:'Intel Core i7-6567U 3.3 GHz (2 cores)',label:'Intel Core i7-6567U 3.3 GHz (2 cores)'},
{value:'Intel Pentium G4560 3.5 GHz (2 cores)',label:'Intel Pentium G4560 3.5 GHz (2 cores)'},
{value:'Intel Core i5-6402P 2.8 GHz (4 cores)',label:'Intel Core i5-6402P 2.8 GHz (4 cores)'},
{value:'Intel Core i5-7500T 2.7 GHz (4 cores)',label:'Intel Core i5-7500T 2.7 GHz (4 cores)'},
{value:'Intel Core i7-6820HQ 2.7 GHz (4 cores)',label:'Intel Core i7-6820HQ 2.7 GHz (4 cores)'},
{value:'Intel Xeon E3-1220 v5 3.0 GHz (4 cores)',label:'Intel Xeon E3-1220 v5 3.0 GHz (4 cores)'},
{value:'Intel Core i3-7100T 3.4 GHz (2 cores)',label:'Intel Core i3-7100T 3.4 GHz (2 cores)'},
{value:'Intel Core i7-4800MQ 2.7 GHz (4 cores)',label:'Intel Core i7-4800MQ 2.7 GHz (4 cores)'},
{value:'Intel Core i5-4570S 2.9 GHz (4 cores)',label:'Intel Core i5-4570S 2.9 GHz (4 cores)'},
{value:'Intel Core i5-7300HQ 2.5 GHz (4 cores)',label:'Intel Core i5-7300HQ 2.5 GHz (4 cores)'},
{value:'Intel Xeon E5-2690 v3 2.6 GHz (12 cores)',label:'Intel Xeon E5-2690 v3 2.6 GHz (12 cores)'},
{value:'Intel Core i3-8100T 3.1 GHz (4 cores)',label:'Intel Core i3-8100T 3.1 GHz (4 cores)'},
{value:'Intel Core i4-4690T 2.5 GHz (4 cores)',label:'Intel Core i4-4690T 2.5 GHz (4 cores)'},
{value:'Intel Core i7-4900MQ 2.8 GHz (4 cores)',label:'Intel Core i7-4900MQ 2.8 GHz (4 cores)'},
{value:'Intel Core i3-4170 3.7 GHz (2 cores)',label:'Intel Core i3-4170 3.7 GHz (2 cores)'},
{value:'Intel Core i7-5700HQ 2.7 GHz (4 cores)',label:'Intel Core i7-5700HQ 2.7 GHz (4 cores)'},
{value:'Intel Core i5-6400 2.7 GHz (4 cores)',label:'Intel Core i5-6400 2.7 GHz (4 cores)'},
{value:'Intel Core i7-5557U 3.1 GHz (2 cores)',label:'Intel Core i7-5557U 3.1 GHz (2 cores)'},
{value:'Intel Xeon E5-1620 v3 3.5 GHz (4 cores)',label:'Intel Xeon E5-1620 v3 3.5 GHz (4 cores)'},
{value:'Intel Core i5-6440HQ 2.6 GHz (4 cores)',label:'Intel Core i5-6440HQ 2.6 GHz (4 cores)'},
{value:'Intel Core i7-4820K 3.7 GHz (4 cores)',label:'Intel Core i7-4820K 3.7 GHz (4 cores)'},
{value:'Intel Core i7-3960X 3.3 GHz (6 cores)',label:'Intel Core i7-3960X 3.3 GHz (6 cores)'},
{value:'Intel Xeon E3-1275 v2 3.5 GHz (4 cores)',label:'Intel Xeon E3-1275 v2 3.5 GHz (4 cores)'},
{value:'AMD Ryzen 7 3750H 2.3 GHz (4 cores)',label:'AMD Ryzen 7 3750H 2.3 GHz (4 cores)'},
{value:'Intel Core i3-6100T 3.2 GHz (2 cores)',label:'Intel Core i3-6100T 3.2 GHz (2 cores)'},
{value:'Intel Xeon E5-2696 v3 2.3 GHz (18 cores)',label:'Intel Xeon E5-2696 v3 2.3 GHz (18 cores)'},
{value:'Intel Core i5-2500K 3.3 GHz (4 cores)',label:'Intel Core i5-2500K 3.3 GHz (4 cores)'},
{value:'Intel Core i7-4930K 3.4 GHz (6 cores)',label:'Intel Core i7-4930K 3.4 GHz (6 cores)'},
{value:'Intel Core i7-2600K 3.4 GHz (4 cores)',label:'Intel Core i7-2600K 3.4 GHz (4 cores)'},
{value:'AMD Ryzen 3 1200 3.1 GHz (4 cores)',label:'AMD Ryzen 3 1200 3.1 GHz (4 cores)'},
{value:'Intel Xeon E5-2697 v3 2.6 GHz (14 cores)',label:'Intel Xeon E5-2697 v3 2.6 GHz (14 cores)'},
{value:'Intel Core i3-4160 3.6 GHz (2 cores)',label:'Intel Core i3-4160 3.6 GHz (2 cores)'},
{value:'Intel Core i5-4308U 2.8 GHz (2 cores)',label:'Intel Core i5-4308U 2.8 GHz (2 cores)'},
{value:'Intel Core i7-8550U 1.8 GHz (4 cores)',label:'Intel Core i7-8550U 1.8 GHz (4 cores)'},
{value:'Intel Core i7-3770 3.4 GHz (4 cores)',label:'Intel Core i7-3770 3.4 GHz (4 cores)'},
{value:'Intel Core i3-4330 3.5 GHz (2 cores)',label:'Intel Core i3-4330 3.5 GHz (2 cores)'},
{value:'Intel Core i7-6700HQ 2.6 GHz (4 cores)',label:'Intel Core i7-6700HQ 2.6 GHz (4 cores)'},
{value:'Intel Core i7-4600M 2.9 GHz (2 cores)',label:'Intel Core i7-4600M 2.9 GHz (2 cores)'},
{value:'Intel Core i5-4460 3.2 GHz (4 cores)',label:'Intel Core i5-4460 3.2 GHz (4 cores)'},
{value:'Intel Xeon E5-1660 v2 3.7 GHz (6 cores)',label:'Intel Xeon E5-1660 v2 3.7 GHz (6 cores)'},
{value:'Intel Core i7-4578U 3.0 GHz (2 cores)',label:'Intel Core i7-4578U 3.0 GHz (2 cores)'},
{value:'Intel Core i3-8130U 2.2 GHz (2 cores)',label:'Intel Core i3-8130U 2.2 GHz (2 cores)'},
{value:'AMD Ryzen 7 3780U Microsoft Surface Edition 2.3 GHz (4 cores)',label:'AMD Ryzen 7 3780U Microsoft Surface Edition 2.3 GHz (4 cores)'},
{value:'Intel Core i7-3970X 3.5 GHz (6 cores)',label:'Intel Core i7-3970X 3.5 GHz (6 cores)'},
{value:'Intel Xeon E3-1245 V2 3.4 GHz (4 cores)',label:'Intel Xeon E3-1245 V2 3.4 GHz (4 cores)'},
{value:'AMD Ryzen 7 PRO 3700U 2.3 GHz (4 cores)',label:'AMD Ryzen 7 PRO 3700U 2.3 GHz (4 cores)'},
{value:'Intel Xeon E5-2690 v4 2.6 GHz (14 cores)',label:'Intel Xeon E5-2690 v4 2.6 GHz (14 cores)'},
{value:'Intel Core i7-3770S 3.1 GHz (4 cores)',label:'Intel Core i7-3770S 3.1 GHz (4 cores)'},
{value:'Intel Core i7-5650U 2.2 GHz (2 cores)',label:'Intel Core i7-5650U 2.2 GHz (2 cores)'},
{value:'Intel Pentium G3258 3.2 GHz (2 cores)',label:'Intel Pentium G3258 3.2 GHz (2 cores)'},
{value:'Intel Core i7-4720HQ 2.6 GHz (4 cores)',label:'Intel Core i7-4720HQ 2.6 GHz (4 cores)'},
{value:'AMD Ryzen 5 1400 3.2 GHz (4 cores)',label:'AMD Ryzen 5 1400 3.2 GHz (4 cores)'},
{value:'Intel Core i7-3840QM 2.8 GHz (4 cores)',label:'Intel Core i7-3840QM 2.8 GHz (4 cores)'},
{value:'Intel Xeon E3-1270 V2 3.5 GHz (4 cores)',label:'Intel Xeon E3-1270 V2 3.5 GHz (4 cores)'},
{value:'Intel Core i7-6650U 2.2 GHz (2 cores)',label:'Intel Core i7-6650U 2.2 GHz (2 cores)'},
{value:'Intel Pentium G4400 3.3 GHz (2 cores)',label:'Intel Pentium G4400 3.3 GHz (2 cores)'},
{value:'Intel Core i7-3930K 3.2 GHz (6 cores)',label:'Intel Core i7-3930K 3.2 GHz (6 cores)'},
{value:'Intel Core i7-4710MQ 2.5 GHz (4 cores)',label:'Intel Core i7-4710MQ 2.5 GHz (4 cores)'},
{value:'Intel Xeon E3-1225 v3 3.2 GHz (4 cores)',label:'Intel Xeon E3-1225 v3 3.2 GHz (4 cores)'},
{value:'Intel Core i5-3570 3.4 GHz (4 cores)',label:'Intel Core i5-3570 3.4 GHz (4 cores)'},
{value:'Intel Core i5-3570S 3.1 GHz (4 cores)',label:'Intel Core i5-3570S 3.1 GHz (4 cores)'},
{value:'Intel Xeon E5-1660 3.3 GHz (6 cores)',label:'Intel Xeon E5-1660 3.3 GHz (6 cores)'},
{value:'Intel Core i5-6500T 2.5 GHz (4 cores)',label:'Intel Core i5-6500T 2.5 GHz (4 cores)'},
{value:'Intel Core i5-4670T 2.3 GHz (4 cores)',label:'Intel Core i5-4670T 2.3 GHz (4 cores)'},
{value:'Intel Core i5-4440 3.1 GHz (4 cores)',label:'Intel Core i5-4440 3.1 GHz (4 cores)'},
{value:'Intel Xeon E5-1650 v2 3.5 GHz (6 cores)',label:'Intel Xeon E5-1650 v2 3.5 GHz (6 cores)'},
{value:'AMD Ryzen 5 3550H 2.1 GHz (4 cores)',label:'AMD Ryzen 5 3550H 2.1 GHz (4 cores)'},
{value:'Intel Core i3-4130 3.4 GHz (2 cores)',label:'Intel Core i3-4130 3.4 GHz (2 cores)'},
{value:'Intel Core i7-4770HQ 2.2 GHz (4 cores)',label:'Intel Core i7-4770HQ 2.2 GHz (4 cores)'},
{value:'Intel Core i7-7500U 2.7 GHz (2 cores)',label:'Intel Core i7-7500U 2.7 GHz (2 cores)'},
{value:'Intel Core i5-6267U 2.9 GHz (2 cores)',label:'Intel Core i5-6267U 2.9 GHz (2 cores)'},
{value:'Intel Xeon E5-1620 v2 3.7 GHz (4 cores)',label:'Intel Xeon E5-1620 v2 3.7 GHz (4 cores)'},
{value:'Intel Core i5-7400T 2.4 GHz (4 cores)',label:'Intel Core i5-7400T 2.4 GHz (4 cores)'},
{value:'Intel Core i3-4150 3.5 GHz (2 cores)',label:'Intel Core i3-4150 3.5 GHz (2 cores)'},
{value:'Intel Xeon E3-1220 v3 3.1 GHz (4 cores)',label:'Intel Xeon E3-1220 v3 3.1 GHz (4 cores)'},
{value:'Intel Core i5-4570T 2.9 GHz (2 cores)',label:'Intel Core i5-4570T 2.9 GHz (2 cores)'},
{value:'Intel Core i5-4430 3.0 GHz (4 cores)',label:'Intel Core i5-4430 3.0 GHz (4 cores)'},
{value:'Intel Xeon E5-2640 v3 2.6 GHz (8 cores)',label:'Intel Xeon E5-2640 v3 2.6 GHz (8 cores)'},
{value:'Intel Core i5-8210Y 1.6 GHz (2 cores)',label:'Intel Core i5-8210Y 1.6 GHz (2 cores)'},
{value:'Intel Core i7-3770T 2.5 GHz (4 cores)',label:'Intel Core i7-3770T 2.5 GHz (4 cores)'},
{value:'AMD EPYC 7702P 2.0 GHz (64 cores)',label:'AMD EPYC 7702P 2.0 GHz (64 cores)'},
{value:'Intel Xeon Silver 4112 2.6 GHz (4 cores)',label:'Intel Xeon Silver 4112 2.6 GHz (4 cores)'},
{value:'Intel Core i7-4785T 2.2 GHz (4 cores)',label:'Intel Core i7-4785T 2.2 GHz (4 cores)'},
{value:'Intel Core i7-4710HQ 2.5 GHz (4 cores)',label:'Intel Core i7-4710HQ 2.5 GHz (4 cores)'},
{value:'Intel Xeon E3-1230V2 3.3 GHz (4 cores)',label:'Intel Xeon E3-1230V2 3.3 GHz (4 cores)'},
{value:'Intel Core i5-3550 3.3 GHz (4 cores)',label:'Intel Core i5-3550 3.3 GHz (4 cores)'},
{value:'Intel Core i5-4570R 2.7 GHz (4 cores)',label:'Intel Core i5-4570R 2.7 GHz (4 cores)'},
{value:'Intel Core i7-3820 3.6 GHz (4 cores)',label:'Intel Core i7-3820 3.6 GHz (4 cores)'},
{value:'Intel Xeon E5-2678 v3 2.5 GHz (12 cores)',label:'Intel Xeon E5-2678 v3 2.5 GHz (12 cores)'},
{value:'Intel Xeon E5-2667 v2 3.3 GHz (8 cores)',label:'Intel Xeon E5-2667 v2 3.3 GHz (8 cores)'},
{value:'Intel Core i5-7300U 2.6 GHz (2 cores)',label:'Intel Core i5-7300U 2.6 GHz (2 cores)'},
{value:'Intel Xeon E3-1240 v2 3.4 GHz (4 cores)',label:'Intel Xeon E3-1240 v2 3.4 GHz (4 cores)'},
{value:'Intel Xeon E5-2687W v2 3.4 GHz (8 cores)',label:'Intel Xeon E5-2687W v2 3.4 GHz (8 cores)'},
{value:'Intel Core i5-4460S 2.9 GHz (4 cores)',label:'Intel Core i5-4460S 2.9 GHz (4 cores)'},
{value:'Intel Core i5-4340M 2.9 GHz (2 cores)',label:'Intel Core i5-4340M 2.9 GHz (2 cores)'},
{value:'Intel Core i7-4700MQ 2.4 GHz (4 cores)',label:'Intel Core i7-4700MQ 2.4 GHz (4 cores)'},
{value:'Intel Xeon E5-2637 v2 3.5 GHz (4 cores)',label:'Intel Xeon E5-2637 v2 3.5 GHz (4 cores)'},
{value:'AMD Athlon 200GE 3.2 GHz (2 cores)',label:'AMD Athlon 200GE 3.2 GHz (2 cores)'},
{value:'Intel Core i5-6360U 2.0 GHz (2 cores)',label:'Intel Core i5-6360U 2.0 GHz (2 cores)'},
{value:'Intel Xeon E5-1607 v3 3.1 GHz (4 cores)',label:'Intel Xeon E5-1607 v3 3.1 GHz (4 cores)'},
{value:'Intel Core i7-4700HQ 2.4 GHz (4 cores)',label:'Intel Core i7-4700HQ 2.4 GHz (4 cores)'},
{value:'Intel Xeon E3-1225 V2 3.2 GHz (4 cores)',label:'Intel Xeon E3-1225 V2 3.2 GHz (4 cores)'},
{value:'Intel Core i5-6300HQ 2.3 GHz (4 cores)',label:'Intel Core i5-6300HQ 2.3 GHz (4 cores)'},
{value:'Intel Core i5-6500TE 2.3 GHz (4 cores)',label:'Intel Core i5-6500TE 2.3 GHz (4 cores)'},
{value:'Intel Core i5-3475S 2.9 GHz (4 cores)',label:'Intel Core i5-3475S 2.9 GHz (4 cores)'},
{value:'Intel Core i5-3550S 3.0 GHz (4 cores)',label:'Intel Core i5-3550S 3.0 GHz (4 cores)'},
{value:'Intel Core i7-4610M 3.0 GHz (2 cores)',label:'Intel Core i7-4610M 3.0 GHz (2 cores)'},
{value:'Intel Core i5-3470 3.2 GHz (4 cores)',label:'Intel Core i5-3470 3.2 GHz (4 cores)'},
{value:'Intel Core i7-4750HQ 2.0 GHz (4 cores)',label:'Intel Core i7-4750HQ 2.0 GHz (4 cores)'},
{value:'Intel Core i5-5287U 2.9 GHz (2 cores)',label:'Intel Core i5-5287U 2.9 GHz (2 cores)'},
{value:'Intel Core i5-4210H 2.9 GHz (2 cores)',label:'Intel Core i5-4210H 2.9 GHz (2 cores)'},
{value:'Intel Xeon E3-1270 3.4 GHz (4 cores)',label:'Intel Xeon E3-1270 3.4 GHz (4 cores)'},
{value:'Intel Celeron G4900 3.1 GHz (2 cores)',label:'Intel Celeron G4900 3.1 GHz (2 cores)'},
{value:'Intel Core i7-4712MQ 2.3 GHz (4 cores)',label:'Intel Core i7-4712MQ 2.3 GHz (4 cores)'},
{value:'AMD Ryzen 5 3500U 2.1 GHz (4 cores)',label:'AMD Ryzen 5 3500U 2.1 GHz (4 cores)'},
{value:'AMD Ryzen 3 2300U 2.0 GHz (4 cores)',label:'AMD Ryzen 3 2300U 2.0 GHz (4 cores)'},
{value:'AMD Ryzen 5 PRO 3500U 2.1 GHz (4 cores)',label:'AMD Ryzen 5 PRO 3500U 2.1 GHz (4 cores)'},
{value:'Intel Core i7-3940XM 3.0 GHz (4 cores)',label:'Intel Core i7-3940XM 3.0 GHz (4 cores)'},
{value:'Intel Core i5-8250U 1.6 GHz (4 cores)',label:'Intel Core i5-8250U 1.6 GHz (4 cores)'},
{value:'Intel Xeon E3-1280 3.5 GHz (4 cores)',label:'Intel Xeon E3-1280 3.5 GHz (4 cores)'},
{value:'Intel Xeon E5-1620 3.6 GHz (4 cores)',label:'Intel Xeon E5-1620 3.6 GHz (4 cores)'},
{value:'AMD Ryzen 7 3700U 2.3 GHz (4 cores)',label:'AMD Ryzen 7 3700U 2.3 GHz (4 cores)'},
{value:'Intel Core i5-4200H 2.8 GHz (2 cores)',label:'Intel Core i5-4200H 2.8 GHz (2 cores)'},
{value:'Intel Core i7-2600 3.4 GHz (4 cores)',label:'Intel Core i7-2600 3.4 GHz (4 cores)'},
{value:'Intel Core i7-3820QM 2.7 GHz (4 cores)',label:'Intel Core i7-3820QM 2.7 GHz (4 cores)'},
{value:'Intel Core i5-4430S 2.7 GHz (4 cores)',label:'Intel Core i5-4430S 2.7 GHz (4 cores)'},
{value:'Intel Core i5-4288U 2.6 GHz (2 cores)',label:'Intel Core i5-4288U 2.6 GHz (2 cores)'},
{value:'AMD Ryzen 5 3580U Microsoft Surface Edition 2.1 GHz (4 cores)',label:'AMD Ryzen 5 3580U Microsoft Surface Edition 2.1 GHz (4 cores)'},
{value:'Intel Xeon E5-2690 v2 3.0 GHz (10 cores)',label:'Intel Xeon E5-2690 v2 3.0 GHz (10 cores)'},
{value:'Intel Core i3-4170T 3.2 GHz (2 cores)',label:'Intel Core i3-4170T 3.2 GHz (2 cores)'},
{value:'Intel Core i5-2500 3.3 GHz (4 cores)',label:'Intel Core i5-2500 3.3 GHz (4 cores)'},
{value:'Intel Xeon E3-1245 3.3 GHz (4 cores)',label:'Intel Xeon E3-1245 3.3 GHz (4 cores)'},
{value:'Intel Xeon E5-2637 v3 3.5 GHz (4 cores)',label:'Intel Xeon E5-2637 v3 3.5 GHz (4 cores)'},
{value:'Intel Xeon E5-1650 3.2 GHz (6 cores)',label:'Intel Xeon E5-1650 3.2 GHz (6 cores)'},
{value:'Intel Xeon E3-1240 3.3 GHz (4 cores)',label:'Intel Xeon E3-1240 3.3 GHz (4 cores)'},
{value:'Intel Core i5-5257U 2.7 GHz (2 cores)',label:'Intel Core i5-5257U 2.7 GHz (2 cores)'},
{value:'Intel Core i5-3470S 2.9 GHz (4 cores)',label:'Intel Core i5-3470S 2.9 GHz (4 cores)'},
{value:'Intel Core i5-3450 3.1 GHz (4 cores)',label:'Intel Core i5-3450 3.1 GHz (4 cores)'},
{value:'Intel Core i5-4590T 2.0 GHz (4 cores)',label:'Intel Core i5-4590T 2.0 GHz (4 cores)'},
{value:'Intel Core i5-6400T 2.2 GHz (4 cores)',label:'Intel Core i5-6400T 2.2 GHz (4 cores)'},
{value:'Intel Core i5-4210M 2.6 GHz (2 cores)',label:'Intel Core i5-4210M 2.6 GHz (2 cores)'},
{value:'Intel Core i3-4160T 3.1 GHz (2 cores)',label:'Intel Core i3-4160T 3.1 GHz (2 cores)'},
{value:'Intel Core i7-6560U 2.2 GHz (2 cores)',label:'Intel Core i7-6560U 2.2 GHz (2 cores)'},
{value:'AMD EPYC 7351P 2.4 GHz (16 cores)',label:'AMD EPYC 7351P 2.4 GHz (16 cores)'},
{value:'Intel Xeon E5-2667 v3 3.2 GHz (8 cores)',label:'Intel Xeon E5-2667 v3 3.2 GHz (8 cores)'},
{value:'Intel Core i7-5600U 2.6 GHz (2 cores)',label:'Intel Core i7-5600U 2.6 GHz (2 cores)'},
{value:'Intel Core i5-4310M 2.7 GHz (2 cores)',label:'Intel Core i5-4310M 2.7 GHz (2 cores)'},
{value:'Intel Core i7-4712HQ 2.3 GHz (4 cores)',label:'Intel Core i7-4712HQ 2.3 GHz (4 cores)'},
{value:'Intel Pentium G3260 3.3 GHz (2 cores)',label:'Intel Pentium G3260 3.3 GHz (2 cores)'},
{value:'Intel Xeon Silver 4108 1.8 GHz (8 cores)',label:'Intel Xeon Silver 4108 1.8 GHz (8 cores)'},
{value:'Intel Core i7-3720QM 2.6 GHz (4 cores)',label:'Intel Core i7-3720QM 2.6 GHz (4 cores)'},
{value:'Intel Core i7-3740QM 2.7 GHz (4 cores)',label:'Intel Core i7-3740QM 2.7 GHz (4 cores)'},
{value:'Intel Pentium G3440 3.3 GHz (2 cores)',label:'Intel Pentium G3440 3.3 GHz (2 cores)'},
{value:'Intel Core i7-4702HQ 2.2 GHz (4 cores)',label:'Intel Core i7-4702HQ 2.2 GHz (4 cores)'},
{value:'AMD Ryzen 7 PRO 2700U 2.2 GHz (4 cores)',label:'AMD Ryzen 7 PRO 2700U 2.2 GHz (4 cores)'},
{value:'Intel Xeon E5-2686 v4 2.3 GHz (8 cores)',label:'Intel Xeon E5-2686 v4 2.3 GHz (8 cores)'},
{value:'AMD EPYC 7401P 2.0 GHz (24 cores)',label:'AMD EPYC 7401P 2.0 GHz (24 cores)'},
{value:'Intel Xeon E5-2620 v3 2.4 GHz (6 cores)',label:'Intel Xeon E5-2620 v3 2.4 GHz (6 cores)'},
{value:'Intel Xeon E5-2683 v3 2.0 GHz (14 cores)',label:'Intel Xeon E5-2683 v3 2.0 GHz (14 cores)'},
{value:'Intel Xeon E5-2630 v3 2.4 GHz (8 cores)',label:'Intel Xeon E5-2630 v3 2.4 GHz (8 cores)'},
{value:'Intel Xeon Silver 4110 2.1 GHz (8 cores)',label:'Intel Xeon Silver 4110 2.1 GHz (8 cores)'},
{value:'Intel Pentium G3420 3.2 GHz (2 cores)',label:'Intel Pentium G3420 3.2 GHz (2 cores)'},
{value:'Intel Xeon E5-2630 v4 2.2 GHz (10 cores)',label:'Intel Xeon E5-2630 v4 2.2 GHz (10 cores)'},
{value:'Intel Core i7-4860HQ 2.4 GHz (4 cores)',label:'Intel Core i7-4860HQ 2.4 GHz (4 cores)'},
{value:'AMD Ryzen 5 PRO 2500U 2.0 GHz (4 cores)',label:'AMD Ryzen 5 PRO 2500U 2.0 GHz (4 cores)'},
{value:'Intel Core i5-4278U 2.6 GHz (2 cores)',label:'Intel Core i5-4278U 2.6 GHz (2 cores)'},
{value:'Intel Core i5-7200U 2.5 GHz (2 cores)',label:'Intel Core i5-7200U 2.5 GHz (2 cores)'},
{value:'Intel Xeon E5-2670 v3 2.3 GHz (12 cores)',label:'Intel Xeon E5-2670 v3 2.3 GHz (12 cores)'},
{value:'Intel Celeron G3930 2.9 GHz (2 cores)',label:'Intel Celeron G3930 2.9 GHz (2 cores)'},
{value:'Intel Core i7-4702MQ 2.2 GHz (4 cores)',label:'Intel Core i7-4702MQ 2.2 GHz (4 cores)'},
{value:'Intel Core i5-6260U 1.8 GHz (2 cores)',label:'Intel Core i5-6260U 1.8 GHz (2 cores)'},
{value:'Intel Xeon Silver 4114 2.2 GHz (10 cores)',label:'Intel Xeon Silver 4114 2.2 GHz (10 cores)'},
{value:'Intel Pentium G4400T 2.9 GHz (2 cores)',label:'Intel Pentium G4400T 2.9 GHz (2 cores)'},
{value:'Intel Xeon E5-2687W 3.1 GHz (8 cores)',label:'Intel Xeon E5-2687W 3.1 GHz (8 cores)'},
{value:'Intel Xeon E5-2620 v4 2.1 GHz (8 cores)',label:'Intel Xeon E5-2620 v4 2.1 GHz (8 cores)'},
{value:'Intel Core i5-4300M 2.6 GHz (2 cores)',label:'Intel Core i5-4300M 2.6 GHz (2 cores)'},
{value:'Intel Core i5-5350U 1.8 GHz (2 cores)',label:'Intel Core i5-5350U 1.8 GHz (2 cores)'},
{value:'Intel Core i7-2920XM 2.5 GHz (4 cores)',label:'Intel Core i7-2920XM 2.5 GHz (4 cores)'},
{value:'Intel Core i5-3450S 2.8 GHz (4 cores)',label:'Intel Core i5-3450S 2.8 GHz (4 cores)'},
{value:'Intel Core i7-7600U 2.8 GHz (2 cores)',label:'Intel Core i7-7600U 2.8 GHz (2 cores)'},
{value:'Intel Xeon E5-2640 v4 2.4 GHz (10 cores)',label:'Intel Xeon E5-2640 v4 2.4 GHz (10 cores)'},
{value:'Intel Core i7-2600S 2.8 GHz (4 cores)',label:'Intel Core i7-2600S 2.8 GHz (4 cores)'},
{value:'Intel Celeron G3900 2.8 GHz (2 cores)',label:'Intel Celeron G3900 2.8 GHz (2 cores)'},
{value:'Intel Xeon E3-1230 3.2 GHz (4 cores)',label:'Intel Xeon E3-1230 3.2 GHz (4 cores)'},
{value:'Intel Core i5-3570T 2.3 GHz (4 cores)',label:'Intel Core i5-3570T 2.3 GHz (4 cores)'},
{value:'Intel Core i5-3340S 2.8 GHz (4 cores)',label:'Intel Core i5-3340S 2.8 GHz (4 cores)'},
{value:'Intel Xeon E5-2680 v3 2.5 GHz (12 cores)',label:'Intel Xeon E5-2680 v3 2.5 GHz (12 cores)'},
{value:'Intel Core i5-3350P 3.1 GHz (4 cores)',label:'Intel Core i5-3350P 3.1 GHz (4 cores)'},
{value:'Intel Core i7-4600U 2.1 GHz (2 cores)',label:'Intel Core i7-4600U 2.1 GHz (2 cores)'},
{value:'Intel Xeon E5-2667 2.9 GHz (6 cores)',label:'Intel Xeon E5-2667 2.9 GHz (6 cores)'},
{value:'Intel Xeon Silver 4116 2.1 GHz (12 cores)',label:'Intel Xeon Silver 4116 2.1 GHz (12 cores)'},
{value:'Intel Core i5-2500S 2.7 GHz (4 cores)',label:'Intel Core i5-2500S 2.7 GHz (4 cores)'},
{value:'Intel Xeon E5-2650 v3 2.3 GHz (10 cores)',label:'Intel Xeon E5-2650 v3 2.3 GHz (10 cores)'},
{value:'Intel Core i3-3250 3.5 GHz (2 cores)',label:'Intel Core i3-3250 3.5 GHz (2 cores)'},
{value:'Intel Core i7-3615QM 2.3 GHz (4 cores)',label:'Intel Core i7-3615QM 2.3 GHz (4 cores)'},
{value:'Intel Core i7-4765T 2.0 GHz (4 cores)',label:'Intel Core i7-4765T 2.0 GHz (4 cores)'},
{value:'AMD Ryzen 3 3200U 2.6 GHz (2 cores)',label:'AMD Ryzen 3 3200U 2.6 GHz (2 cores)'},
{value:'Intel Core i5-2400 3.1 GHz (4 cores)',label:'Intel Core i5-2400 3.1 GHz (4 cores)'},
{value:'Intel Core i5-3470T 2.9 GHz (2 cores)',label:'Intel Core i5-3470T 2.9 GHz (2 cores)'},
{value:'Intel Xeon W3690 3.5 GHz (6 cores)',label:'Intel Xeon W3690 3.5 GHz (6 cores)'},
{value:'Intel Core i5-3330 3.0 GHz (4 cores)',label:'Intel Core i5-3330 3.0 GHz (4 cores)'},
{value:'AMD Ryzen 5 2500U 2.0 GHz (4 cores)',label:'AMD Ryzen 5 2500U 2.0 GHz (4 cores)'},
{value:'Intel Core i7-990X 3.5 GHz (6 cores)',label:'Intel Core i7-990X 3.5 GHz (6 cores)'},
{value:'Intel Core i5-4200M 2.5 GHz (2 cores)',label:'Intel Core i5-4200M 2.5 GHz (2 cores)'},
{value:'Intel Core i7-3540M 3.0 GHz (2 cores)',label:'Intel Core i7-3540M 3.0 GHz (2 cores)'},
{value:'Intel Xeon E5-2690 2.9 GHz (8 cores)',label:'Intel Xeon E5-2690 2.9 GHz (8 cores)'},
{value:'Intel Xeon E5-2680 v2 2.8 GHz (10 cores)',label:'Intel Xeon E5-2680 v2 2.8 GHz (10 cores)'},
{value:'Intel Xeon E3-1225 3.1 GHz (4 cores)',label:'Intel Xeon E3-1225 3.1 GHz (4 cores)'},
{value:'Intel Core i7-3630QM 2.4 GHz (4 cores)',label:'Intel Core i7-3630QM 2.4 GHz (4 cores)'},
{value:'Intel Xeon E3-1220 3.1 GHz (4 cores)',label:'Intel Xeon E3-1220 3.1 GHz (4 cores)'},
{value:'Intel Xeon E5-2697 v2 2.7 GHz (12 cores)',label:'Intel Xeon E5-2697 v2 2.7 GHz (12 cores)'},
{value:'Intel Core i3-6100H 2.7 GHz (2 cores)',label:'Intel Core i3-6100H 2.7 GHz (2 cores)'},
{value:'AMD Ryzen 7 2700U 2.2 GHz (4 cores)',label:'AMD Ryzen 7 2700U 2.2 GHz (4 cores)'},
{value:'Intel Core i7-2760QM 2.4 GHz (4 cores)',label:'Intel Core i7-2760QM 2.4 GHz (4 cores)'},
{value:'Intel Core i7-3520M 2.9 GHz (2 cores)',label:'Intel Core i7-3520M 2.9 GHz (2 cores)'},
{value:'Intel Core i5-4258U 2.4 GHz (2 cores)',label:'Intel Core i5-4258U 2.4 GHz (2 cores)'},
{value:'Intel Pentium G3250 3.2 GHz (2 cores)',label:'Intel Pentium G3250 3.2 GHz (2 cores)'},
{value:'Intel Core i3-4150T 3.0 GHz (2 cores)',label:'Intel Core i3-4150T 3.0 GHz (2 cores)'},
{value:'Intel Xeon W3680 3.3 GHz (6 cores)',label:'Intel Xeon W3680 3.3 GHz (6 cores)'},
{value:'AMD Ryzen 3 2200U 2.5 GHz (2 cores)',label:'AMD Ryzen 3 2200U 2.5 GHz (2 cores)'},
{value:'Intel Xeon E3-1220 v2 3.1 GHz (4 cores)',label:'Intel Xeon E3-1220 v2 3.1 GHz (4 cores)'},
{value:'Intel Core i7-3610QM 2.3 GHz (4 cores)',label:'Intel Core i7-3610QM 2.3 GHz (4 cores)'},
{value:'Intel Xeon E5-2680 2.7 GHz (8 cores)',label:'Intel Xeon E5-2680 2.7 GHz (8 cores)'},
{value:'Intel Core i5-3340 3.1 GHz (4 cores)',label:'Intel Core i5-3340 3.1 GHz (4 cores)'},
{value:'Intel Core i7-5500U 2.4 GHz (2 cores)',label:'Intel Core i7-5500U 2.4 GHz (2 cores)'},
{value:'Intel Core i5-2320 3.0 GHz (4 cores)',label:'Intel Core i5-2320 3.0 GHz (4 cores)'},
{value:'Intel Core i3-7130U 2.7 GHz (2 cores)',label:'Intel Core i3-7130U 2.7 GHz (2 cores)'},
{value:'AMD FX-9590 4.7 GHz (8 cores)',label:'AMD FX-9590 4.7 GHz (8 cores)'},
{value:'Intel Xeon X5690 3.5 GHz (6 cores)',label:'Intel Xeon X5690 3.5 GHz (6 cores)'},
{value:'Intel Core i5-5300U 2.3 GHz (2 cores)',label:'Intel Core i5-5300U 2.3 GHz (2 cores)'},
{value:'Intel Xeon X5677 3.5 GHz (4 cores)',label:'Intel Xeon X5677 3.5 GHz (4 cores)'},
{value:'Intel Core i7-4510U 2.0 GHz (2 cores)',label:'Intel Core i7-4510U 2.0 GHz (2 cores)'},
{value:'Intel Core i5-3335S 2.7 GHz (4 cores)',label:'Intel Core i5-3335S 2.7 GHz (4 cores)'},
{value:'Intel Core i5-6300U 2.4 GHz (2 cores)',label:'Intel Core i5-6300U 2.4 GHz (2 cores)'},
{value:'Intel Core i3-3225 3.3 GHz (2 cores)',label:'Intel Core i3-3225 3.3 GHz (2 cores)'},
{value:'Intel Pentium G2130 3.2 GHz (2 cores)',label:'Intel Pentium G2130 3.2 GHz (2 cores)'},
{value:'Intel Xeon E5-1607 v2 3.0 GHz (4 cores)',label:'Intel Xeon E5-1607 v2 3.0 GHz (4 cores)'},
{value:'Intel Core i7-980X 3.3 GHz (6 cores)',label:'Intel Core i7-980X 3.3 GHz (6 cores)'},
{value:'Intel Core i3-4130T 2.9 GHz (2 cores)',label:'Intel Core i3-4130T 2.9 GHz (2 cores)'},
{value:'Intel Core i7-2860QM 2.5 GHz (4 cores)',label:'Intel Core i7-2860QM 2.5 GHz (4 cores)'},
{value:'Intel Core i7-3635QM 2.4 GHz (4 cores)',label:'Intel Core i7-3635QM 2.4 GHz (4 cores)'},
{value:'Intel Xeon E5-2623 v4 2.6 GHz (4 cores)',label:'Intel Xeon E5-2623 v4 2.6 GHz (4 cores)'},
{value:'Intel Core i7-4650U 1.7 GHz (2 cores)',label:'Intel Core i7-4650U 1.7 GHz (2 cores)'},
{value:'Intel Xeon E3-1265L v2 2.5 GHz (4 cores)',label:'Intel Xeon E3-1265L v2 2.5 GHz (4 cores)'},
{value:'Intel Core i5-3330S 2.7 GHz (4 cores)',label:'Intel Core i5-3330S 2.7 GHz (4 cores)'},
{value:'Intel Pentium G3220 3.0 GHz (2 cores)',label:'Intel Pentium G3220 3.0 GHz (2 cores)'},
{value:'Intel Pentium G3240 3.1 GHz (2 cores)',label:'Intel Pentium G3240 3.1 GHz (2 cores)'},
{value:'Intel Xeon E5-2650 v2 2.6 GHz (8 cores)',label:'Intel Xeon E5-2650 v2 2.6 GHz (8 cores)'},
{value:'Intel Core i5-2310 2.9 GHz (4 cores)',label:'Intel Core i5-2310 2.9 GHz (4 cores)'},
{value:'Intel Core i5-3340M 2.7 GHz (2 cores)',label:'Intel Core i5-3340M 2.7 GHz (2 cores)'},
{value:'Intel Core i5-3360M 2.8 GHz (2 cores)',label:'Intel Core i5-3360M 2.8 GHz (2 cores)'},
{value:'AMD FX-9370 4.4 GHz (8 cores)',label:'AMD FX-9370 4.4 GHz (8 cores)'},
{value:'Intel Core i7-3632QM 2.2 GHz (4 cores)',label:'Intel Core i7-3632QM 2.2 GHz (4 cores)'},
{value:'Intel Xeon X5680 3.3 GHz (6 cores)',label:'Intel Xeon X5680 3.3 GHz (6 cores)'},
{value:'Intel Xeon E5-1607 3.0 GHz (4 cores)',label:'Intel Xeon E5-1607 3.0 GHz (4 cores)'},
{value:'Intel Core i7-2820QM 2.3 GHz (4 cores)',label:'Intel Core i7-2820QM 2.3 GHz (4 cores)'},
{value:'Intel Core i7-4500U 1.8 GHz (2 cores)',label:'Intel Core i7-4500U 1.8 GHz (2 cores)'},
{value:'Intel Core i5-3380M 2.9 GHz (2 cores)',label:'Intel Core i5-3380M 2.9 GHz (2 cores)'},
{value:'Intel Xeon E5-2643 3.3 GHz (4 cores)',label:'Intel Xeon E5-2643 3.3 GHz (4 cores)'},
{value:'Intel Core i3-3220 3.3 GHz (2 cores)',label:'Intel Core i3-3220 3.3 GHz (2 cores)'},
{value:'Intel Core i5-2400S 2.5 GHz (4 cores)',label:'Intel Core i5-2400S 2.5 GHz (4 cores)'},
{value:'Intel Xeon E5-2630 v2 2.6 GHz (6 cores)',label:'Intel Xeon E5-2630 v2 2.6 GHz (6 cores)'},
{value:'Intel Core i7-3612QM 2.1 GHz (4 cores)',label:'Intel Core i7-3612QM 2.1 GHz (4 cores)'},
{value:'Intel Core i5-2300 2.8 GHz (4 cores)',label:'Intel Core i5-2300 2.8 GHz (4 cores)'},
{value:'Intel Core i7-975 3.3 GHz (4 cores)',label:'Intel Core i7-975 3.3 GHz (4 cores)'},
{value:'Intel Celeron G1850 2.9 GHz (2 cores)',label:'Intel Celeron G1850 2.9 GHz (2 cores)'},
{value:'Intel Core i5-4300U 1.9 GHz (2 cores)',label:'Intel Core i5-4300U 1.9 GHz (2 cores)'},
{value:'Intel Xeon X5675 3.1 GHz (6 cores)',label:'Intel Xeon X5675 3.1 GHz (6 cores)'},
{value:'Intel Core i3-3240 3.4 GHz (2 cores)',label:'Intel Core i3-3240 3.4 GHz (2 cores)'},
{value:'Intel Core i5-3320M 2.6 GHz (2 cores)',label:'Intel Core i5-3320M 2.6 GHz (2 cores)'},
{value:'Intel Xeon E5-2670 2.6 GHz (8 cores)',label:'Intel Xeon E5-2670 2.6 GHz (8 cores)'},
{value:'Intel Core i3-2125 3.3 GHz (2 cores)',label:'Intel Core i3-2125 3.3 GHz (2 cores)'},
{value:'Intel Pentium G2120 3.1 GHz (2 cores)',label:'Intel Pentium G2120 3.1 GHz (2 cores)'},
{value:'Intel Core i5-5250U 1.6 GHz (2 cores)',label:'Intel Core i5-5250U 1.6 GHz (2 cores)'},
{value:'Intel Core i7-2640M 2.8 GHz (2 cores)',label:'Intel Core i7-2640M 2.8 GHz (2 cores)'},
{value:'Intel Core i7-970 3.2 GHz (6 cores)',label:'Intel Core i7-970 3.2 GHz (6 cores)'},
{value:'Intel Core i7-2620M 2.7 GHz (2 cores)',label:'Intel Core i7-2620M 2.7 GHz (2 cores)'},
{value:'Intel Core i5-2405S 2.5 GHz (4 cores)',label:'Intel Core i5-2405S 2.5 GHz (4 cores)'},
{value:'AMD FX-8370 4.0 GHz (8 cores)',label:'AMD FX-8370 4.0 GHz (8 cores)'},
{value:'Intel Xeon 2.2 GHz (4 cores)',label:'Intel Xeon 2.2 GHz (4 cores)'},
{value:'Intel Core i7-3667U 2.0 GHz (2 cores)',label:'Intel Core i7-3667U 2.0 GHz (2 cores)'},
{value:'Intel Core i3-5157U 2.5 GHz (2 cores)',label:'Intel Core i3-5157U 2.5 GHz (2 cores)'},
{value:'Intel Core i3-2120 3.3 GHz (2 cores)',label:'Intel Core i3-2120 3.3 GHz (2 cores)'},
{value:'Intel Celeron G1840 2.8 GHz (2 cores)',label:'Intel Celeron G1840 2.8 GHz (2 cores)'},
{value:'Intel Core i3-7100U 2.4 GHz (2 cores)',label:'Intel Core i3-7100U 2.4 GHz (2 cores)'},
{value:'Intel Core i5-3230M 2.6 GHz (2 cores)',label:'Intel Core i5-3230M 2.6 GHz (2 cores)'},
{value:'Intel Core i5-4260U 1.4 GHz (2 cores)',label:'Intel Core i5-4260U 1.4 GHz (2 cores)'},
{value:'Intel Xeon E5-2660 v2 2.2 GHz (10 cores)',label:'Intel Xeon E5-2660 v2 2.2 GHz (10 cores)'},
{value:'Intel Core i5-5200U 2.2 GHz (2 cores)',label:'Intel Core i5-5200U 2.2 GHz (2 cores)'},
{value:'Intel Core i7-965 3.2 GHz (4 cores)',label:'Intel Core i7-965 3.2 GHz (4 cores)'},
{value:'Intel Core i7-960 3.2 GHz (4 cores)',label:'Intel Core i7-960 3.2 GHz (4 cores)'},
{value:'Intel Celeron G1820 2.7 GHz (2 cores)',label:'Intel Celeron G1820 2.7 GHz (2 cores)'},
{value:'Intel Core i5-6200U 2.3 GHz (2 cores)',label:'Intel Core i5-6200U 2.3 GHz (2 cores)'},
{value:'Intel Core i7-875K 2.9 GHz (4 cores)',label:'Intel Core i7-875K 2.9 GHz (4 cores)'},
{value:'AMD FX-4350 4.2 GHz (4 cores)',label:'AMD FX-4350 4.2 GHz (4 cores)'},
{value:'AMD FX-8350 4.0 GHz (8 cores)',label:'AMD FX-8350 4.0 GHz (8 cores)'},
{value:'Intel Core i5-4250U 1.3 GHz (2 cores)',label:'Intel Core i5-4250U 1.3 GHz (2 cores)'},
{value:'Intel Xeon E5-2665 2.4 GHz (8 cores)',label:'Intel Xeon E5-2665 2.4 GHz (8 cores)'},
{value:'Intel Xeon E5-1603 2.8 GHz (4 cores)',label:'Intel Xeon E5-1603 2.8 GHz (4 cores)'},
{value:'Intel Xeon E5-2695 v2 2.4 GHz (12 cores)',label:'Intel Xeon E5-2695 v2 2.4 GHz (12 cores)'},
{value:'Intel Core i7-4558U 2.8 GHz (2 cores)',label:'Intel Core i7-4558U 2.8 GHz (2 cores)'},
{value:'Intel Core i5-4310U 2.0 GHz (2 cores)',label:'Intel Core i5-4310U 2.0 GHz (2 cores)'},
{value:'Intel Core i3-6100U 2.3 GHz (2 cores)',label:'Intel Core i3-6100U 2.3 GHz (2 cores)'},
{value:'Intel Core i5-2540M 2.6 GHz (2 cores)',label:'Intel Core i5-2540M 2.6 GHz (2 cores)'},
{value:'Intel Core i5-4460T 1.9 GHz (4 cores)',label:'Intel Core i5-4460T 1.9 GHz (4 cores)'},
{value:'Intel Core i7-3687U 2.1 GHz (2 cores)',label:'Intel Core i7-3687U 2.1 GHz (2 cores)'},
{value:'Intel Core i7-2635QM 2.0 GHz (4 cores)',label:'Intel Core i7-2635QM 2.0 GHz (4 cores)'},
{value:'Intel Core i3-2105 3.1 GHz (2 cores)',label:'Intel Core i3-2105 3.1 GHz (2 cores)'},
{value:'Intel Xeon E5-2640 2.5 GHz (6 cores)',label:'Intel Xeon E5-2640 2.5 GHz (6 cores)'},
{value:'Intel Xeon X5670 2.9 GHz (6 cores)',label:'Intel Xeon X5670 2.9 GHz (6 cores)'},
{value:'AMD FX-4330 4.0 GHz (2 cores)',label:'AMD FX-4330 4.0 GHz (2 cores)'},
{value:'Intel Xeon E5-2420 v2 2.2 GHz (6 cores)',label:'Intel Xeon E5-2420 v2 2.2 GHz (6 cores)'},
{value:'Intel Core i3-7020U 2.3 GHz (2 cores)',label:'Intel Core i3-7020U 2.3 GHz (2 cores)'},
{value:'Intel Core i5-3210M 2.5 GHz (2 cores)',label:'Intel Core i5-3210M 2.5 GHz (2 cores)'},
{value:'Intel Core i3-2130 3.4 GHz (2 cores)',label:'Intel Core i3-2130 3.4 GHz (2 cores)'},
{value:'Intel Xeon X5570 2.9 GHz (4 cores)',label:'Intel Xeon X5570 2.9 GHz (4 cores)'},
{value:'Intel Pentium G2030 3.0 GHz (2 cores)',label:'Intel Pentium G2030 3.0 GHz (2 cores)'},
{value:'AMD Athlon X4 870K 3.9 GHz (2 cores)',label:'AMD Athlon X4 870K 3.9 GHz (2 cores)'},
{value:'AMD A12-9800 3.8 GHz (4 cores)',label:'AMD A12-9800 3.8 GHz (4 cores)'},
{value:'Intel Core i7-940XM 2.1 GHz (4 cores)',label:'Intel Core i7-940XM 2.1 GHz (4 cores)'},
{value:'AMD FX - 4320 4.0 GHz (2 cores)',label:'AMD FX - 4320 4.0 GHz (2 cores)'},
{value:'Intel Core i3-2100 3.1 GHz (2 cores)',label:'Intel Core i3-2100 3.1 GHz (2 cores)'},
{value:'Intel Xeon W3670 3.2 GHz (6 cores)',label:'Intel Xeon W3670 3.2 GHz (6 cores)'},
{value:'Intel Xeon E5-2660 2.2 GHz (8 cores)',label:'Intel Xeon E5-2660 2.2 GHz (8 cores)'},
{value:'Intel Xeon W3550 3.1 GHz (4 cores)',label:'Intel Xeon W3550 3.1 GHz (4 cores)'},
{value:'Intel Core i7-3537U 2.0 GHz (2 cores)',label:'Intel Core i7-3537U 2.0 GHz (2 cores)'},
{value:'Intel Core i5-4210U 1.7 GHz (2 cores)',label:'Intel Core i5-4210U 1.7 GHz (2 cores)'},
{value:'Intel Core i5-2520M 2.5 GHz (2 cores)',label:'Intel Core i5-2520M 2.5 GHz (2 cores)'},
{value:'Intel Core i7-870 2.9 GHz (4 cores)',label:'Intel Core i7-870 2.9 GHz (4 cores)'},
{value:'Intel Xeon W3565 3.2 GHz (4 cores)',label:'Intel Xeon W3565 3.2 GHz (4 cores)'},
{value:'AMD A10-6800K 4.1 GHz (4 cores)',label:'AMD A10-6800K 4.1 GHz (4 cores)'},
{value:'Intel Core i3-3210 3.2 GHz (2 cores)',label:'Intel Core i3-3210 3.2 GHz (2 cores)'},
{value:'Intel Xeon X5660 2.8 GHz (6 cores)',label:'Intel Xeon X5660 2.8 GHz (6 cores)'},
{value:'AMD FX-6350 3.9 GHz (6 cores)',label:'AMD FX-6350 3.9 GHz (6 cores)'},
{value:'Intel Core i7-950 3.1 GHz (4 cores)',label:'Intel Core i7-950 3.1 GHz (4 cores)'},
{value:'Intel Core i5-4200U 1.6 GHz (2 cores)',label:'Intel Core i5-4200U 1.6 GHz (2 cores)'},
{value:'AMD Athlon X4 880K 4.2 GHz (2 cores)',label:'AMD Athlon X4 880K 4.2 GHz (2 cores)'},
{value:'Intel Core i7-2670QM 2.2 GHz (4 cores)',label:'Intel Core i7-2670QM 2.2 GHz (4 cores)'},
{value:'AMD FX-4170 4.2 GHz (2 cores)',label:'AMD FX-4170 4.2 GHz (2 cores)'},
{value:'Intel Core i3-3240T 2.9 GHz (2 cores)',label:'Intel Core i3-3240T 2.9 GHz (2 cores)'},
{value:'AMD Athlon X4 860K 3.7 GHz (4 cores)',label:'AMD Athlon X4 860K 3.7 GHz (4 cores)'},
{value:'AMD A10-7870K 3.9 GHz (2 cores)',label:'AMD A10-7870K 3.9 GHz (2 cores)'},
{value:'Intel Core i5-670 3.5 GHz (2 cores)',label:'Intel Core i5-670 3.5 GHz (2 cores)'},
{value:'Intel Xeon W3540 2.9 GHz (4 cores)',label:'Intel Xeon W3540 2.9 GHz (4 cores)'},
{value:'AMD A8-6600K 3.9 GHz (4 cores)',label:'AMD A8-6600K 3.9 GHz (4 cores)'},
{value:'Intel Core i5-660 3.3 GHz (2 cores)',label:'Intel Core i5-660 3.3 GHz (2 cores)'},
{value:'AMD FX-6200 3.8 GHz (3 cores)',label:'AMD FX-6200 3.8 GHz (3 cores)'},
{value:'AMD A10-6700 3.7 GHz (4 cores)',label:'AMD A10-6700 3.7 GHz (4 cores)'},
{value:'Intel Core i5-2450M 2.5 GHz (2 cores)',label:'Intel Core i5-2450M 2.5 GHz (2 cores)'},
{value:'Intel Pentium G2010 2.8 GHz (2 cores)',label:'Intel Pentium G2010 2.8 GHz (2 cores)'},
{value:'Intel Pentium G870 3.1 GHz (2 cores)',label:'Intel Pentium G870 3.1 GHz (2 cores)'},
{value:'Intel Pentium 4415U 2.3 GHz (2 cores)',label:'Intel Pentium 4415U 2.3 GHz (2 cores)'},
{value:'Intel Core i5-2435M 2.4 GHz (2 cores)',label:'Intel Core i5-2435M 2.4 GHz (2 cores)'},
{value:'AMD FX-8320 3.5 GHz (8 cores)',label:'AMD FX-8320 3.5 GHz (8 cores)'},
{value:'AMD FX-6300 3.5 GHz (6 cores)',label:'AMD FX-6300 3.5 GHz (6 cores)'},
{value:'Intel Xeon E5-2630 2.3 GHz (6 cores)',label:'Intel Xeon E5-2630 2.3 GHz (6 cores)'},
{value:'Intel Core i7-2637M 1.7 GHz (2 cores)',label:'Intel Core i7-2637M 1.7 GHz (2 cores)'},
{value:'AMD Athlon X4 845 3.5 GHz (2 cores)',label:'AMD Athlon X4 845 3.5 GHz (2 cores)'},
{value:'Intel Core i7-640M 2.8 GHz (2 cores)',label:'Intel Core i7-640M 2.8 GHz (2 cores)'},
{value:'Intel Pentium G2020 2.9 GHz (2 cores)',label:'Intel Pentium G2020 2.9 GHz (2 cores)'},
{value:'AMD FX-8150 3.6 GHz (8 cores)',label:'AMD FX-8150 3.6 GHz (8 cores)'},
{value:'Intel Core i3-4000M 2.4 GHz (2 cores)',label:'Intel Core i3-4000M 2.4 GHz (2 cores)'},
{value:'Intel Core i5-760 2.8 GHz (4 cores)',label:'Intel Core i5-760 2.8 GHz (4 cores)'},
{value:'Intel Core i3-4100M 2.5 GHz (2 cores)',label:'Intel Core i3-4100M 2.5 GHz (2 cores)'},
{value:'Intel Core i5-650 3.2 GHz (2 cores)',label:'Intel Core i5-650 3.2 GHz (2 cores)'},
{value:'AMD FX-4300 3.8 GHz (4 cores)',label:'AMD FX-4300 3.8 GHz (4 cores)'},
{value:'AMD FX-8300 3.3 GHz (8 cores)',label:'AMD FX-8300 3.3 GHz (8 cores)'},
{value:'Intel Pentium G3220T 2.6 GHz (2 cores)',label:'Intel Pentium G3220T 2.6 GHz (2 cores)'},
{value:'Intel Core i7-2720QM 2.2 GHz (4 cores)',label:'Intel Core i7-2720QM 2.2 GHz (4 cores)'},
{value:'Intel Core i7-2675QM 2.2 GHz (4 cores)',label:'Intel Core i7-2675QM 2.2 GHz (4 cores)'},
{value:'AMD A10-5800K 3.8 GHz (2 cores)',label:'AMD A10-5800K 3.8 GHz (2 cores)'},
{value:'AMD A10-7850K 3.7 GHz (4 cores)',label:'AMD A10-7850K 3.7 GHz (4 cores)'},
{value:'Intel Pentium G850 2.9 GHz (2 cores)',label:'Intel Pentium G850 2.9 GHz (2 cores)'},
{value:'Intel Core i3-3220T 2.8 GHz (2 cores)',label:'Intel Core i3-3220T 2.8 GHz (2 cores)'},
{value:'Intel Core i7-2630QM 2.0 GHz (4 cores)',label:'Intel Core i7-2630QM 2.0 GHz (4 cores)'},
{value:'Intel Xeon W3530 2.8 GHz (4 cores)',label:'Intel Xeon W3530 2.8 GHz (4 cores)'},
{value:'Intel Pentium G860 3.0 GHz (2 cores)',label:'Intel Pentium G860 3.0 GHz (2 cores)'},
{value:'AMD Athlon X4 840 3.1 GHz (4 cores)',label:'AMD Athlon X4 840 3.1 GHz (4 cores)'},
{value:'Intel Celeron G1620 2.7 GHz (2 cores)',label:'Intel Celeron G1620 2.7 GHz (2 cores)'},
{value:'AMD A10-8750 3.6 GHz (4 cores)',label:'AMD A10-8750 3.6 GHz (4 cores)'},
{value:'AMD Athlon X4 950 3.5 GHz (4 cores)',label:'AMD Athlon X4 950 3.5 GHz (4 cores)'},
{value:'Intel Core i7-860 2.8 GHz (4 cores)',label:'Intel Core i7-860 2.8 GHz (4 cores)'},
{value:'Intel Core i5-2430M 2.4 GHz (2 cores)',label:'Intel Core i5-2430M 2.4 GHz (2 cores)'},
{value:'Intel Core i7-2960XM 2.7 GHz (4 cores)',label:'Intel Core i7-2960XM 2.7 GHz (4 cores)'},
{value:'Intel Core i5-680 3.6 GHz (2 cores)',label:'Intel Core i5-680 3.6 GHz (2 cores)'},
{value:'Intel Xeon X5650 2.7 GHz (6 cores)',label:'Intel Xeon X5650 2.7 GHz (6 cores)'},
{value:'Intel Core i7-940 2.9 GHz (4 cores)',label:'Intel Core i7-940 2.9 GHz (4 cores)'},
{value:'AMD A10-7860K 3.6 GHz (4 cores)',label:'AMD A10-7860K 3.6 GHz (4 cores)'},
{value:'Intel Core i7-3517U 1.9 GHz (2 cores)',label:'Intel Core i7-3517U 1.9 GHz (2 cores)'},
{value:'Intel Pentium G840 2.8 GHz (2 cores)',label:'Intel Pentium G840 2.8 GHz (2 cores)'},
{value:'Intel Core i5-750 2.7 GHz (4 cores)',label:'Intel Core i5-750 2.7 GHz (4 cores)'},
{value:'Intel Core i7-930 2.8 GHz (4 cores)',label:'Intel Core i7-930 2.8 GHz (4 cores)'},
{value:'AMD FX-6120 3.5 GHz (3 cores)',label:'AMD FX-6120 3.5 GHz (3 cores)'},
{value:'AMD Phenom II X6 1100T Black Edition 3.7 GHz (6 cores)',label:'AMD Phenom II X6 1100T Black Edition 3.7 GHz (6 cores)'},
{value:'Intel Core M-5Y51 1.1 GHz (2 cores)',label:'Intel Core M-5Y51 1.1 GHz (2 cores)'},
{value:'Intel Celeron 3955U 2.0 GHz (2 cores)',label:'Intel Celeron 3955U 2.0 GHz (2 cores)'},
{value:'AMD FX-8320E 3.2 GHz (8 cores)',label:'AMD FX-8320E 3.2 GHz (8 cores)'},
{value:'Intel Xeon X3450 2.7 GHz (4 cores)',label:'Intel Xeon X3450 2.7 GHz (4 cores)'},
{value:'AMD A8-5600K 3.6 GHz (4 cores)',label:'AMD A8-5600K 3.6 GHz (4 cores)'},
{value:'Intel Core i5-661 3.3 GHz (2 cores)',label:'Intel Core i5-661 3.3 GHz (2 cores)'},
{value:'Intel Xeon E5-2430 2.2 GHz (6 cores)',label:'Intel Xeon E5-2430 2.2 GHz (6 cores)'},
{value:'AMD Athlon X4 750K 3.4 GHz (4 cores)',label:'AMD Athlon X4 750K 3.4 GHz (4 cores)'},
{value:'Intel Core i3-6006U 2.0 GHz (2 cores)',label:'Intel Core i3-6006U 2.0 GHz (2 cores)'},
{value:'Intel Xeon E5-2630L v2 2.4 GHz (6 cores)',label:'Intel Xeon E5-2630L v2 2.4 GHz (6 cores)'},
{value:'AMD FX - 770K 3.5 GHz (2 cores)',label:'AMD FX - 770K 3.5 GHz (2 cores)'},
{value:'AMD A10 PRO-7800B 3.5 GHz (4 cores)',label:'AMD A10 PRO-7800B 3.5 GHz (4 cores)'},
{value:'Intel Celeron G1610 2.6 GHz (2 cores)',label:'Intel Celeron G1610 2.6 GHz (2 cores)'},
{value:'Intel Core i3-5010U 2.1 GHz (2 cores)',label:'Intel Core i3-5010U 2.1 GHz (2 cores)'},
{value:'AMD A10-7800 3.5 GHz (4 cores)',label:'AMD A10-7800 3.5 GHz (4 cores)'},
{value:'AMD A10-9700 3.5 GHz (4 cores)',label:'AMD A10-9700 3.5 GHz (4 cores)'},
{value:'Intel Core i5-2410M 2.3 GHz (2 cores)',label:'Intel Core i5-2410M 2.3 GHz (2 cores)'},
{value:'Intel Pentium G640 2.8 GHz (2 cores)',label:'Intel Pentium G640 2.8 GHz (2 cores)'},
{value:'Intel Xeon L5640 2.3 GHz (6 cores)',label:'Intel Xeon L5640 2.3 GHz (6 cores)'},
{value:'Intel Core i5-3337U 1.8 GHz (2 cores)',label:'Intel Core i5-3337U 1.8 GHz (2 cores)'},
{value:'Intel Xeon E5-2620 v2 2.1 GHz (6 cores)',label:'Intel Xeon E5-2620 v2 2.1 GHz (6 cores)'},
{value:'AMD A8-7600 3.1 GHz (4 cores)',label:'AMD A8-7600 3.1 GHz (4 cores)'},
{value:'AMD A6-9500 3.5 GHz (2 cores)',label:'AMD A6-9500 3.5 GHz (2 cores)'},
{value:'AMD PRO A10-9700E 3.0 GHz (4 cores)',label:'AMD PRO A10-9700E 3.0 GHz (4 cores)'},
{value:'Intel Pentium G645 2.9 GHz (2 cores)',label:'Intel Pentium G645 2.9 GHz (2 cores)'},
{value:'Intel Pentium 4405U 2.1 GHz (2 cores)',label:'Intel Pentium 4405U 2.1 GHz (2 cores)'},
{value:'AMD Athlon X4 760K 3.8 GHz (4 cores)',label:'AMD Athlon X4 760K 3.8 GHz (4 cores)'},
{value:'Intel Xeon E5640 2.7 GHz (4 cores)',label:'Intel Xeon E5640 2.7 GHz (4 cores)'},
{value:'AMD A8-6500 3.5 GHz (4 cores)',label:'AMD A8-6500 3.5 GHz (4 cores)'},
{value:'Intel Core M-5Y70 1.1 GHz (2 cores)',label:'Intel Core M-5Y70 1.1 GHz (2 cores)'},
{value:'AMD FX-8120 3.1 GHz (8 cores)',label:'AMD FX-8120 3.1 GHz (8 cores)'},
{value:'Intel Xeon E5-2609 2.4 GHz (4 cores)',label:'Intel Xeon E5-2609 2.4 GHz (4 cores)'},
{value:'Intel Core i3-5015U 2.1 GHz (2 cores)',label:'Intel Core i3-5015U 2.1 GHz (2 cores)'},
{value:'Intel Xeon W3520 2.7 GHz (4 cores)',label:'Intel Xeon W3520 2.7 GHz (4 cores)'},
{value:'Intel Core i5-3437U 1.9 GHz (2 cores)',label:'Intel Core i5-3437U 1.9 GHz (2 cores)'},
{value:'Intel Core i3-550 3.2 GHz (2 cores)',label:'Intel Core i3-550 3.2 GHz (2 cores)'},
{value:'AMD A8-7650K 3.3 GHz (4 cores)',label:'AMD A8-7650K 3.3 GHz (4 cores)'},
{value:'AMD A8-9600 3.1 GHz (4 cores)',label:'AMD A8-9600 3.1 GHz (4 cores)'},
{value:'Intel Xeon E5649 2.5 GHz (6 cores)',label:'Intel Xeon E5649 2.5 GHz (6 cores)'},
{value:'Intel Core M-5Y10 800 MHz (2 cores)',label:'Intel Core M-5Y10 800 MHz (2 cores)'},
{value:'AMD Phenom II X4 975 Black Edition 3.6 GHz (4 cores)',label:'AMD Phenom II X4 975 Black Edition 3.6 GHz (4 cores)'},
{value:'Intel Xeon X5550 2.7 GHz (4 cores)',label:'Intel Xeon X5550 2.7 GHz (4 cores)'},
{value:'Intel Xeon E5-2420 1.9 GHz (6 cores)',label:'Intel Xeon E5-2420 1.9 GHz (6 cores)'},
{value:'Intel Xeon X3460 2.8 GHz (4 cores)',label:'Intel Xeon X3460 2.8 GHz (4 cores)'},
{value:'AMD FX-4100 3.6 GHz (4 cores)',label:'AMD FX-4100 3.6 GHz (4 cores)'},
{value:'AMD FX-4130 3.8 GHz (4 cores)',label:'AMD FX-4130 3.8 GHz (4 cores)'},
{value:'Intel Core i7-620M 2.7 GHz (2 cores)',label:'Intel Core i7-620M 2.7 GHz (2 cores)'},
{value:'Intel Xeon E5-2603 v4 1.7 GHz (6 cores)',label:'Intel Xeon E5-2603 v4 1.7 GHz (6 cores)'},
{value:'AMD PRO A10-8750B 3.6 GHz (4 cores)',label:'AMD PRO A10-8750B 3.6 GHz (4 cores)'},
{value:'Intel Core 2 Duo E8600 3.3 GHz (2 cores)',label:'Intel Core 2 Duo E8600 3.3 GHz (2 cores)'},
{value:'AMD A10-5700 3.4 GHz (4 cores)',label:'AMD A10-5700 3.4 GHz (4 cores)'},
{value:'Intel Core M-5Y10c 800 MHz (2 cores)',label:'Intel Core M-5Y10c 800 MHz (2 cores)'},
{value:'Intel Core i7-920 2.7 GHz (4 cores)',label:'Intel Core i7-920 2.7 GHz (4 cores)'},
{value:'Intel Pentium G630 2.7 GHz (2 cores)',label:'Intel Pentium G630 2.7 GHz (2 cores)'},
{value:'Intel Core i7-2677M 1.8 GHz (2 cores)',label:'Intel Core i7-2677M 1.8 GHz (2 cores)'},
{value:'Intel Core i3-3120M 2.5 GHz (2 cores)',label:'Intel Core i3-3120M 2.5 GHz (2 cores)'},
{value:'AMD A8-5500 3.2 GHz (4 cores)',label:'AMD A8-5500 3.2 GHz (4 cores)'},
{value:'AMD A6-6400K 3.9 GHz (2 cores)',label:'AMD A6-6400K 3.9 GHz (2 cores)'},
{value:'AMD PRO A12-8830B 2.5 GHz (4 cores)',label:'AMD PRO A12-8830B 2.5 GHz (4 cores)'},
{value:'Intel Core i5-4202Y 1.6 GHz (2 cores)',label:'Intel Core i5-4202Y 1.6 GHz (2 cores)'},
{value:'AMD FX-6100 3.3 GHz (6 cores)',label:'AMD FX-6100 3.3 GHz (6 cores)'},
{value:'Intel Pentium G620 2.6 GHz (2 cores)',label:'Intel Pentium G620 2.6 GHz (2 cores)'},
{value:'Intel Xeon X3440 2.5 GHz (4 cores)',label:'Intel Xeon X3440 2.5 GHz (4 cores)'},
{value:'AMD Phenom II X6 1090T Black Edition 3.2 GHz (6 cores)',label:'AMD Phenom II X6 1090T Black Edition 3.2 GHz (6 cores)'},
{value:'Intel Xeon E5-2650 2.0 GHz (8 cores)',label:'Intel Xeon E5-2650 2.0 GHz (8 cores)'},
{value:'AMD Athlon X4 740 3.2 GHz (4 cores)',label:'AMD Athlon X4 740 3.2 GHz (4 cores)'},
{value:'Intel Core i3-540 3.1 GHz (2 cores)',label:'Intel Core i3-540 3.1 GHz (2 cores)'},
{value:'Intel Xeon X5482 3.2 GHz (4 cores)',label:'Intel Xeon X5482 3.2 GHz (4 cores)'},
{value:'Intel Core i5-3427U 1.8 GHz (2 cores)',label:'Intel Core i5-3427U 1.8 GHz (2 cores)'},
{value:'AMD A8 PRO-7600B 3.1 GHz (4 cores)',label:'AMD A8 PRO-7600B 3.1 GHz (4 cores)'},
{value:'Intel Core 2 Duo T9900 3.1 GHz (2 cores)',label:'Intel Core 2 Duo T9900 3.1 GHz (2 cores)'},
{value:'Intel Core 2 Extreme X9650 3.0 GHz (4 cores)',label:'Intel Core 2 Extreme X9650 3.0 GHz (4 cores)'},
{value:'Intel Core i5-3317U 1.7 GHz (2 cores)',label:'Intel Core i5-3317U 1.7 GHz (2 cores)'},
{value:'Intel Core i5-2415M 2.3 GHz (2 cores)',label:'Intel Core i5-2415M 2.3 GHz (2 cores)'},
{value:'AMD A8-6500B 3.5 GHz (4 cores)',label:'AMD A8-6500B 3.5 GHz (4 cores)'},
{value:'Intel Core i5-4300Y 1.6 GHz (2 cores)',label:'Intel Core i5-4300Y 1.6 GHz (2 cores)'},
{value:'Intel Celeron G550 2.6 GHz (2 cores)',label:'Intel Celeron G550 2.6 GHz (2 cores)'},
{value:'Intel Core i3-5005U 2.0 GHz (2 cores)',label:'Intel Core i3-5005U 2.0 GHz (2 cores)'},
{value:'Intel Xeon E5645 2.4 GHz (6 cores)',label:'Intel Xeon E5645 2.4 GHz (6 cores)'},
{value:'Intel Pentium Silver J5005 1.5 GHz (4 cores)',label:'Intel Pentium Silver J5005 1.5 GHz (4 cores)'},
{value:'AMD Phenom II X4 965 Black Edition 3.4 GHz (4 cores)',label:'AMD Phenom II X4 965 Black Edition 3.4 GHz (4 cores)'},
{value:'Intel Core i5-560M 2.7 GHz (2 cores)',label:'Intel Core i5-560M 2.7 GHz (2 cores)'},
{value:'Intel Xeon E5-2620 2.0 GHz (6 cores)',label:'Intel Xeon E5-2620 2.0 GHz (6 cores)'},
{value:'AMD A4-6300 3.7 GHz (2 cores)',label:'AMD A4-6300 3.7 GHz (2 cores)'},
{value:'AMD A4-5300 3.4 GHz (2 cores)',label:'AMD A4-5300 3.4 GHz (2 cores)'},
{value:'Intel Core i3-3110M 2.4 GHz (2 cores)',label:'Intel Core i3-3110M 2.4 GHz (2 cores)'},
{value:'Intel Core i3-2120T 2.6 GHz (2 cores)',label:'Intel Core i3-2120T 2.6 GHz (2 cores)'},
{value:'Intel Core i3-5020U 2.2 GHz (2 cores)',label:'Intel Core i3-5020U 2.2 GHz (2 cores)'},
{value:'AMD A6-7400K 3.5 GHz (1 core)',label:'AMD A6-7400K 3.5 GHz (1 core)'},
{value:'Intel Core i5-540M 2.5 GHz (2 cores)',label:'Intel Core i5-540M 2.5 GHz (2 cores)'},
{value:'Intel Xeon X5460 3.2 GHz (4 cores)',label:'Intel Xeon X5460 3.2 GHz (4 cores)'},
{value:'Intel Core 2 Duo E8500 3.2 GHz (2 cores)',label:'Intel Core 2 Duo E8500 3.2 GHz (2 cores)'},
{value:'Intel Xeon E5450 3.0 GHz (4 cores)',label:'Intel Xeon E5450 3.0 GHz (4 cores)'},
{value:'Intel Core 2 Quad Q9650 3.0 GHz (4 cores)',label:'Intel Core 2 Quad Q9650 3.0 GHz (4 cores)'},
{value:'Intel Core i3-530 2.9 GHz (2 cores)',label:'Intel Core i3-530 2.9 GHz (2 cores)'},
{value:'AMD Phenom II X4 970 Black Edition 3.5 GHz (4 cores)',label:'AMD Phenom II X4 970 Black Edition 3.5 GHz (4 cores)'},
{value:'Intel Xeon X3430 2.4 GHz (4 cores)',label:'Intel Xeon X3430 2.4 GHz (4 cores)'},
{value:'AMD A6-5400B 3.6 GHz (2 cores)',label:'AMD A6-5400B 3.6 GHz (2 cores)'},
{value:'AMD A8-5557M 2.1 GHz (4 cores)',label:'AMD A8-5557M 2.1 GHz (4 cores)'},
{value:'Intel Core i5-2557M 1.7 GHz (2 cores)',label:'Intel Core i5-2557M 1.7 GHz (2 cores)'},
{value:'Intel Celeron 3865U 1.8 GHz (2 cores)',label:'Intel Celeron 3865U 1.8 GHz (2 cores)'},
{value:'AMD PRO A8-9600B 2.4 GHz (4 cores)',label:'AMD PRO A8-9600B 2.4 GHz (4 cores)'},
{value:'AMD R-Series RX-427BB 2.7 GHz (4 cores)',label:'AMD R-Series RX-427BB 2.7 GHz (4 cores)'},
{value:'AMD Phenom II X4 960T 3.0 GHz (4 cores)',label:'AMD Phenom II X4 960T 3.0 GHz (4 cores)'},
{value:'AMD A6-5400K 3.6 GHz (2 cores)',label:'AMD A6-5400K 3.6 GHz (2 cores)'},
{value:'Intel Pentium Silver N5000 1.1 GHz (4 cores)',label:'Intel Pentium Silver N5000 1.1 GHz (4 cores)'},
{value:'Intel Xeon E5620 2.4 GHz (4 cores)',label:'Intel Xeon E5620 2.4 GHz (4 cores)'},
{value:'Intel Core i3-4030U 1.9 GHz (2 cores)',label:'Intel Core i3-4030U 1.9 GHz (2 cores)'},
{value:'AMD A4-7300 3.8 GHz (2 cores)',label:'AMD A4-7300 3.8 GHz (2 cores)'},
{value:'AMD Phenom II X2 560 Black Edition 3.3 GHz (2 cores)',label:'AMD Phenom II X2 560 Black Edition 3.3 GHz (2 cores)'},
{value:'Intel Core i7-920XM 2.0 GHz (4 cores)',label:'Intel Core i7-920XM 2.0 GHz (4 cores)'},
{value:'Intel Celeron G530 2.4 GHz (2 cores)',label:'Intel Celeron G530 2.4 GHz (2 cores)'},
{value:'Intel Core i5-580M 2.7 GHz (2 cores)',label:'Intel Core i5-580M 2.7 GHz (2 cores)'},
{value:'AMD PRO A12-9800B 2.7 GHz (4 cores)',label:'AMD PRO A12-9800B 2.7 GHz (4 cores)'},
{value:'Intel Pentium 2020M 2.4 GHz (2 cores)',label:'Intel Pentium 2020M 2.4 GHz (2 cores)'},
{value:'AMD FX-9830P 3.0 GHz (4 cores)',label:'AMD FX-9830P 3.0 GHz (4 cores)'},
{value:'Intel Core 2 Duo E8400 3.0 GHz (2 cores)',label:'Intel Core 2 Duo E8400 3.0 GHz (2 cores)'},
{value:'AMD Phenom II X4 955 Black Edition 3.2 GHz (4 cores)',label:'AMD Phenom II X4 955 Black Edition 3.2 GHz (4 cores)'},
{value:'Intel Xeon X5450 3.0 GHz (4 cores)',label:'Intel Xeon X5450 3.0 GHz (4 cores)'},
{value:'Intel Xeon E5472 3.0 GHz (4 cores)',label:'Intel Xeon E5472 3.0 GHz (4 cores)'},
{value:'Intel Pentium E6700 3.2 GHz (2 cores)',label:'Intel Pentium E6700 3.2 GHz (2 cores)'},
{value:'Intel Pentium 3805U 1.9 GHz (2 cores)',label:'Intel Pentium 3805U 1.9 GHz (2 cores)'},
{value:'Intel Celeron J4105 1.5 GHz (4 cores)',label:'Intel Celeron J4105 1.5 GHz (4 cores)'},
{value:'Intel Xeon E5-2603 v3 1.6 GHz (6 cores)',label:'Intel Xeon E5-2603 v3 1.6 GHz (6 cores)'},
{value:'Intel Core i7-840QM 1.9 GHz (4 cores)',label:'Intel Core i7-840QM 1.9 GHz (4 cores)'},
{value:'AMD Phenom II X2 550 Black Edition 3.1 GHz (2 cores)',label:'AMD Phenom II X2 550 Black Edition 3.1 GHz (2 cores)'},
{value:'Intel Core 2 Duo E7600 3.1 GHz (2 cores)',label:'Intel Core 2 Duo E7600 3.1 GHz (2 cores)'},
{value:'Intel Core i5-520M 2.4 GHz (2 cores)',label:'Intel Core i5-520M 2.4 GHz (2 cores)'},
{value:'Intel Xeon E5440 2.8 GHz (4 cores)',label:'Intel Xeon E5440 2.8 GHz (4 cores)'},
{value:'AMD A10-5750M 2.5 GHz (4 cores)',label:'AMD A10-5750M 2.5 GHz (4 cores)'},
{value:'Intel Core 2 Quad Q9550 2.8 GHz (4 cores)',label:'Intel Core 2 Quad Q9550 2.8 GHz (4 cores)'},
{value:'Intel Core i7-640LM 2.1 GHz (2 cores)',label:'Intel Core i7-640LM 2.1 GHz (2 cores)'},
{value:'Intel Xeon E5520 2.3 GHz (4 cores)',label:'Intel Xeon E5520 2.3 GHz (4 cores)'},
{value:'AMD Athlon II X2 270 3.4 GHz (2 cores)',label:'AMD Athlon II X2 270 3.4 GHz (2 cores)'},
{value:'AMD FX-8800P 2.1 GHz (4 cores)',label:'AMD FX-8800P 2.1 GHz (4 cores)'},
{value:'AMD A8-5500B 3.2 GHz (4 cores)',label:'AMD A8-5500B 3.2 GHz (4 cores)'},
{value:'AMD Phenom II X2 555 Black Edition 3.2 GHz (2 cores)',label:'AMD Phenom II X2 555 Black Edition 3.2 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q9450 2.7 GHz (4 cores)',label:'Intel Core 2 Quad Q9450 2.7 GHz (4 cores)'},
{value:'Intel Core i3-2370M 2.4 GHz (2 cores)',label:'Intel Core i3-2370M 2.4 GHz (2 cores)'},
{value:'AMD FX-4200 3.3 GHz (4 cores)',label:'AMD FX-4200 3.3 GHz (4 cores)'},
{value:'Intel Core 2 Duo E6850 3.0 GHz (2 cores)',label:'Intel Core 2 Duo E6850 3.0 GHz (2 cores)'},
{value:'AMD Phenom II X4 940 Black Edition 3.0 GHz (4 cores)',label:'AMD Phenom II X4 940 Black Edition 3.0 GHz (4 cores)'},
{value:'AMD Phenom II X4 945 3.0 GHz (4 cores)',label:'AMD Phenom II X4 945 3.0 GHz (4 cores)'},
{value:'AMD Athlon II X4 651 3.0 GHz (4 cores)',label:'AMD Athlon II X4 651 3.0 GHz (4 cores)'},
{value:'AMD Phenom II X2 545 3.0 GHz (2 cores)',label:'AMD Phenom II X2 545 3.0 GHz (2 cores)'},
{value:'Intel Core 2 Duo T9550 2.7 GHz (2 cores)',label:'Intel Core 2 Duo T9550 2.7 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q9500 2.8 GHz (4 cores)',label:'Intel Core 2 Quad Q9500 2.8 GHz (4 cores)'},
{value:'Intel Xeon E5462 2.8 GHz (4 cores)',label:'Intel Xeon E5462 2.8 GHz (4 cores)'},
{value:'Intel Xeon E5430 2.7 GHz (4 cores)',label:'Intel Xeon E5430 2.7 GHz (4 cores)'},
{value:'Intel Core i5-4210Y 1.5 GHz (2 cores)',label:'Intel Core i5-4210Y 1.5 GHz (2 cores)'},
{value:'AMD PRO A8-8600B 1.6 GHz (4 cores)',label:'AMD PRO A8-8600B 1.6 GHz (4 cores)'},
{value:'AMD A4-5300B 3.4 GHz (2 cores)',label:'AMD A4-5300B 3.4 GHz (2 cores)'},
{value:'AMD A6-5357M 2.9 GHz (2 cores)',label:'AMD A6-5357M 2.9 GHz (2 cores)'},
{value:'Intel Pentium 3825U 1.9 GHz (2 cores)',label:'Intel Pentium 3825U 1.9 GHz (2 cores)'},
{value:'Intel Celeron N4000 1.1 GHz (2 cores)',label:'Intel Celeron N4000 1.1 GHz (2 cores)'},
{value:'AMD A10-9620P 2.5 GHz (4 cores)',label:'AMD A10-9620P 2.5 GHz (4 cores)'},
{value:'Intel Core i3-2350M 2.3 GHz (2 cores)',label:'Intel Core i3-2350M 2.3 GHz (2 cores)'},
{value:'Intel Core i5-460M 2.5 GHz (2 cores)',label:'Intel Core i5-460M 2.5 GHz (2 cores)'},
{value:'Intel Core i7-820QM 1.7 GHz (4 cores)',label:'Intel Core i7-820QM 1.7 GHz (4 cores)'},
{value:'Intel Pentium E6600 3.1 GHz (2 cores)',label:'Intel Pentium E6600 3.1 GHz (2 cores)'},
{value:'Intel Core 2 Duo E7500 2.9 GHz (2 cores)',label:'Intel Core 2 Duo E7500 2.9 GHz (2 cores)'},
{value:'AMD A12-9720P 2.7 GHz (4 cores)',label:'AMD A12-9720P 2.7 GHz (4 cores)'},
{value:'AMD A4-4020 3.2 GHz (2 cores)',label:'AMD A4-4020 3.2 GHz (2 cores)'},
{value:'Intel Core 2 Duo E8200 2.7 GHz (2 cores)',label:'Intel Core 2 Duo E8200 2.7 GHz (2 cores)'},
{value:'AMD A10-8700P 1.8 GHz (4 cores)',label:'AMD A10-8700P 1.8 GHz (4 cores)'},
{value:'Intel Core i3-390M 2.7 GHz (2 cores)',label:'Intel Core i3-390M 2.7 GHz (2 cores)'},
{value:'AMD Phenom II X4 840 3.2 GHz (4 cores)',label:'AMD Phenom II X4 840 3.2 GHz (4 cores)'},
{value:'Intel Celeron N4100 1.1 GHz (4 cores)',label:'Intel Celeron N4100 1.1 GHz (4 cores)'},
{value:'Intel Pentium E5800 3.2 GHz (2 cores)',label:'Intel Pentium E5800 3.2 GHz (2 cores)'},
{value:'AMD Athlon II X3 460 3.4 GHz (3 cores)',label:'AMD Athlon II X3 460 3.4 GHz (3 cores)'},
{value:'Intel Pentium B980 2.4 GHz (2 cores)',label:'Intel Pentium B980 2.4 GHz (2 cores)'},
{value:'Intel Core i3-2348M 2.3 GHz (2 cores)',label:'Intel Core i3-2348M 2.3 GHz (2 cores)'},
{value:'Intel Celeron 3855U 1.6 GHz (2 cores)',label:'Intel Celeron 3855U 1.6 GHz (2 cores)'},
{value:'Intel Core i5-480M 2.7 GHz (2 cores)',label:'Intel Core i5-480M 2.7 GHz (2 cores)'},
{value:'AMD A8-5550M 2.1 GHz (4 cores)',label:'AMD A8-5550M 2.1 GHz (4 cores)'},
{value:'AMD FX-7600P 2.7 GHz (4 cores)',label:'AMD FX-7600P 2.7 GHz (4 cores)'},
{value:'AMD Phenom II X3 720 2.8 GHz (3 cores)',label:'AMD Phenom II X3 720 2.8 GHz (3 cores)'},
{value:'Intel Core i3-4010U 1.7 GHz (2 cores)',label:'Intel Core i3-4010U 1.7 GHz (2 cores)'},
{value:'Intel Celeron 3215U 1.7 GHz (2 cores)',label:'Intel Celeron 3215U 1.7 GHz (2 cores)'},
{value:'Intel Core 2 Duo T9600 2.8 GHz (2 cores)',label:'Intel Core 2 Duo T9600 2.8 GHz (2 cores)'},
{value:'AMD FX-9800P 2.7 GHz (4 cores)',label:'AMD FX-9800P 2.7 GHz (4 cores)'},
{value:'AMD Athlon II X4 645 3.1 GHz (4 cores)',label:'AMD Athlon II X4 645 3.1 GHz (4 cores)'},
{value:'AMD A10-5757M 2.5 GHz (4 cores)',label:'AMD A10-5757M 2.5 GHz (4 cores)'},
{value:'Intel Core i3-4005U 1.7 GHz (2 cores)',label:'Intel Core i3-4005U 1.7 GHz (2 cores)'},
{value:'Intel Core i5-450M 2.4 GHz (2 cores)',label:'Intel Core i5-450M 2.4 GHz (2 cores)'},
{value:'AMD Athlon II X3 435 2.9 GHz (3 cores)',label:'AMD Athlon II X3 435 2.9 GHz (3 cores)'},
{value:'Intel Core i3-2328M 2.2 GHz (2 cores)',label:'Intel Core i3-2328M 2.2 GHz (2 cores)'},
{value:'Intel Celeron J4005 2.0 GHz (2 cores)',label:'Intel Celeron J4005 2.0 GHz (2 cores)'},
{value:'Intel Xeon L5420 2.5 GHz (4 cores)',label:'Intel Xeon L5420 2.5 GHz (4 cores)'},
{value:'Intel Celeron 3965Y 1.5 GHz (2 cores)',label:'Intel Celeron 3965Y 1.5 GHz (2 cores)'},
{value:'Intel Core 2 Duo E7400 2.8 GHz (2 cores)',label:'Intel Core 2 Duo E7400 2.8 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q9400 2.7 GHz (4 cores)',label:'Intel Core 2 Quad Q9400 2.7 GHz (4 cores)'},
{value:'AMD A10-7400P 2.5 GHz (4 cores)',label:'AMD A10-7400P 2.5 GHz (4 cores)'},
{value:'Intel Xeon E5540 2.5 GHz (4 cores)',label:'Intel Xeon E5540 2.5 GHz (4 cores)'},
{value:'AMD Phenom II X4 B95 3.0 GHz (4 cores)',label:'AMD Phenom II X4 B95 3.0 GHz (4 cores)'},
{value:'AMD Athlon II X2 260 3.2 GHz (2 cores)',label:'AMD Athlon II X2 260 3.2 GHz (2 cores)'},
{value:'AMD Athlon II X3 445 3.1 GHz (3 cores)',label:'AMD Athlon II X3 445 3.1 GHz (3 cores)'},
{value:'AMD Athlon II X3 455 3.3 GHz (3 cores)',label:'AMD Athlon II X3 455 3.3 GHz (3 cores)'},
{value:'Intel Core 2 Duo P8800 2.7 GHz (2 cores)',label:'Intel Core 2 Duo P8800 2.7 GHz (2 cores)'},
{value:'Intel Xeon X3360 2.8 GHz (4 cores)',label:'Intel Xeon X3360 2.8 GHz (4 cores)'},
{value:'AMD Athlon II X4 641 2.8 GHz (4 cores)',label:'AMD Athlon II X4 641 2.8 GHz (4 cores)'},
{value:'AMD Athlon II X3 440 3.0 GHz (3 cores)',label:'AMD Athlon II X3 440 3.0 GHz (3 cores)'},
{value:'AMD A8-3870 3.0 GHz (4 cores)',label:'AMD A8-3870 3.0 GHz (4 cores)'},
{value:'Intel Pentium B960 2.2 GHz (2 cores)',label:'Intel Pentium B960 2.2 GHz (2 cores)'},
{value:'Intel Pentium 4415Y 1.6 GHz (2 cores)',label:'Intel Pentium 4415Y 1.6 GHz (2 cores)'},
{value:'AMD Athlon II X3 450 3.2 GHz (3 cores)',label:'AMD Athlon II X3 450 3.2 GHz (3 cores)'},
{value:'Intel Core i3-2330M 2.2 GHz (2 cores)',label:'Intel Core i3-2330M 2.2 GHz (2 cores)'},
{value:'Intel Core 2 Duo E8300 2.8 GHz (2 cores)',label:'Intel Core 2 Duo E8300 2.8 GHz (2 cores)'},
{value:'Intel Core 2 Duo P9400 2.4 GHz (2 cores)',label:'Intel Core 2 Duo P9400 2.4 GHz (2 cores)'},
{value:'AMD Athlon II X4 635 2.9 GHz (4 cores)',label:'AMD Athlon II X4 635 2.9 GHz (4 cores)'},
{value:'Intel Xeon E3110 3.0 GHz (2 cores)',label:'Intel Xeon E3110 3.0 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q8400 2.7 GHz (4 cores)',label:'Intel Core 2 Quad Q8400 2.7 GHz (4 cores)'},
{value:'Intel Core i3-2310M 2.1 GHz (2 cores)',label:'Intel Core i3-2310M 2.1 GHz (2 cores)'},
{value:'Intel Core i3-380M 2.5 GHz (2 cores)',label:'Intel Core i3-380M 2.5 GHz (2 cores)'},
{value:'Intel Core i7-740QM 1.7 GHz (4 cores)',label:'Intel Core i7-740QM 1.7 GHz (4 cores)'},
{value:'AMD Phenom II X4 820 2.8 GHz (4 cores)',label:'AMD Phenom II X4 820 2.8 GHz (4 cores)'},
{value:'Intel Pentium 3556U 1.7 GHz (2 cores)',label:'Intel Pentium 3556U 1.7 GHz (2 cores)'},
{value:'AMD Athlon II X2 B22 2.8 GHz (2 cores)',label:'AMD Athlon II X2 B22 2.8 GHz (2 cores)'},
{value:'Intel Pentium 4405Y 1.5 GHz (2 cores)',label:'Intel Pentium 4405Y 1.5 GHz (2 cores)'},
{value:'Intel Pentium 4410Y 1.5 GHz (2 cores)',label:'Intel Pentium 4410Y 1.5 GHz (2 cores)'},
{value:'Intel Core i5-2467M 1.6 GHz (2 cores)',label:'Intel Core i5-2467M 1.6 GHz (2 cores)'},
{value:'Intel Core 2 Duo T9300 2.5 GHz (2 cores)',label:'Intel Core 2 Duo T9300 2.5 GHz (2 cores)'},
{value:'Intel Pentium E6300 2.8 GHz (2 cores)',label:'Intel Pentium E6300 2.8 GHz (2 cores)'},
{value:'AMD A8-3850 2.9 GHz (4 cores)',label:'AMD A8-3850 2.9 GHz (4 cores)'},
{value:'Intel Pentium B940 2.0 GHz (2 cores)',label:'Intel Pentium B940 2.0 GHz (2 cores)'},
{value:'AMD A10-9600P 2.4 GHz (4 cores)',label:'AMD A10-9600P 2.4 GHz (4 cores)'},
{value:'Intel Core 2 Duo P9700 2.8 GHz (2 cores)',label:'Intel Core 2 Duo P9700 2.8 GHz (2 cores)'},
{value:'Intel Core 2 Duo E6750 2.7 GHz (2 cores)',label:'Intel Core 2 Duo E6750 2.7 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q6700 2.7 GHz (4 cores)',label:'Intel Core 2 Quad Q6700 2.7 GHz (4 cores)'},
{value:'AMD Athlon II X4 640 3.0 GHz (4 cores)',label:'AMD Athlon II X4 640 3.0 GHz (4 cores)'},
{value:'AMD A6-3670 2.7 GHz (4 cores)',label:'AMD A6-3670 2.7 GHz (4 cores)'},
{value:'Intel Celeron 1037U 1.8 GHz (2 cores)',label:'Intel Celeron 1037U 1.8 GHz (2 cores)'},
{value:'AMD Athlon II X2 245 2.9 GHz (2 cores)',label:'AMD Athlon II X2 245 2.9 GHz (2 cores)'},
{value:'AMD Athlon II X2 250 3.0 GHz (2 cores)',label:'AMD Athlon II X2 250 3.0 GHz (2 cores)'},
{value:'AMD Phenom II X3 710 2.6 GHz (3 cores)',label:'AMD Phenom II X3 710 2.6 GHz (3 cores)'},
{value:'AMD Phenom II X4 810 2.6 GHz (4 cores)',label:'AMD Phenom II X4 810 2.6 GHz (4 cores)'},
{value:'Intel Pentium E5500 2.8 GHz (2 cores)',label:'Intel Pentium E5500 2.8 GHz (2 cores)'},
{value:'Intel Pentium E6500 2.9 GHz (2 cores)',label:'Intel Pentium E6500 2.9 GHz (2 cores)'},
{value:'Intel Core i5-430M 2.3 GHz (2 cores)',label:'Intel Core i5-430M 2.3 GHz (2 cores)'},
{value:'AMD A10-4600M 2.3 GHz (4 cores)',label:'AMD A10-4600M 2.3 GHz (4 cores)'},
{value:'Intel Pentium B970 2.3 GHz (2 cores)',label:'Intel Pentium B970 2.3 GHz (2 cores)'},
{value:'Intel Pentium 2117U 1.8 GHz (2 cores)',label:'Intel Pentium 2117U 1.8 GHz (2 cores)'},
{value:'Intel Core 2 Duo T9500 2.6 GHz (2 cores)',label:'Intel Core 2 Duo T9500 2.6 GHz (2 cores)'},
{value:'Intel Pentium E5700 3.0 GHz (2 cores)',label:'Intel Pentium E5700 3.0 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q9300 2.5 GHz (4 cores)',label:'Intel Core 2 Quad Q9300 2.5 GHz (4 cores)'},
{value:'AMD Phenom II X4 925 2.8 GHz (4 cores)',label:'AMD Phenom II X4 925 2.8 GHz (4 cores)'},
{value:'Intel Pentium B950 2.1 GHz (2 cores)',label:'Intel Pentium B950 2.1 GHz (2 cores)'},
{value:'Intel Core i3-370M 2.4 GHz (2 cores)',label:'Intel Core i3-370M 2.4 GHz (2 cores)'},
{value:'Intel Core i7-720QM 1.6 GHz (4 cores)',label:'Intel Core i7-720QM 1.6 GHz (4 cores)'},
{value:'Intel Core i3-3227U 1.9 GHz (2 cores)',label:'Intel Core i3-3227U 1.9 GHz (2 cores)'},
{value:'AMD A4-3400 2.7 GHz (2 cores)',label:'AMD A4-3400 2.7 GHz (2 cores)'},
{value:'AMD Athlon II X2 220 2.8 GHz (2 cores)',label:'AMD Athlon II X2 220 2.8 GHz (2 cores)'},
{value:'Intel Celeron 1005M 1.9 GHz (2 cores)',label:'Intel Celeron 1005M 1.9 GHz (2 cores)'},
{value:'AMD Athlon II X2 B24 3.0 GHz (2 cores)',label:'AMD Athlon II X2 B24 3.0 GHz (2 cores)'},
{value:'Intel Core 2 Duo P8700 2.5 GHz (2 cores)',label:'Intel Core 2 Duo P8700 2.5 GHz (2 cores)'},
{value:'AMD Athlon II X4 630 2.8 GHz (4 cores)',label:'AMD Athlon II X4 630 2.8 GHz (4 cores)'},
{value:'Intel Core i3-4020Y 1.5 GHz (2 cores)',label:'Intel Core i3-4020Y 1.5 GHz (2 cores)'},
{value:'AMD Athlon II X4 631 2.6 GHz (4 cores)',label:'AMD Athlon II X4 631 2.6 GHz (4 cores)'},
{value:'AMD A4-4000 3.0 GHz (2 cores)',label:'AMD A4-4000 3.0 GHz (2 cores)'},
{value:'AMD FX-7500 2.1 GHz (4 cores)',label:'AMD FX-7500 2.1 GHz (4 cores)'},
{value:'AMD Athlon II X2 240 2.8 GHz (2 cores)',label:'AMD Athlon II X2 240 2.8 GHz (2 cores)'},
{value:'AMD Athlon II X2 255 3.1 GHz (2 cores)',label:'AMD Athlon II X2 255 3.1 GHz (2 cores)'},
{value:'AMD A4-3420 2.8 GHz (2 cores)',label:'AMD A4-3420 2.8 GHz (2 cores)'},
{value:'Intel Xeon X3220 2.4 GHz (4 cores)',label:'Intel Xeon X3220 2.4 GHz (4 cores)'},
{value:'Intel Core 2 Duo E7300 2.7 GHz (2 cores)',label:'Intel Core 2 Duo E7300 2.7 GHz (2 cores)'},
{value:'Intel Core 2 Duo E7200 2.5 GHz (2 cores)',label:'Intel Core 2 Duo E7200 2.5 GHz (2 cores)'},
{value:'Intel Core 2 Quad Q8300 2.5 GHz (4 cores)',label:'Intel Core 2 Quad Q8300 2.5 GHz (4 cores)'},
{value:'Intel Core i3-350M 2.3 GHz (2 cores)',label:'Intel Core i3-350M 2.3 GHz (2 cores)'},
{value:'AMD A6-3650 2.6 GHz (4 cores)',label:'AMD A6-3650 2.6 GHz (4 cores)'},
{value:'Intel Core 2 Quad Q6600 2.4 GHz (4 cores)',label:'Intel Core 2 Quad Q6600 2.4 GHz (4 cores)'},
{value:'AMD Athlon II X2 215 2.7 GHz (2 cores)',label:'AMD Athlon II X2 215 2.7 GHz (2 cores)'},
{value:'Intel Core 2 Duo T9400 2.5 GHz (2 cores)',label:'Intel Core 2 Duo T9400 2.5 GHz (2 cores)'},
{value:'Intel Core i3-3217U 1.8 GHz (2 cores)',label:'Intel Core i3-3217U 1.8 GHz (2 cores)'},
{value:'AMD Sempron 140 2.7 GHz (1 core)',label:'AMD Sempron 140 2.7 GHz (1 core)'},
{value:'AMD PRO A10-8730B 2.4 GHz (4 cores)',label:'AMD PRO A10-8730B 2.4 GHz (4 cores)'},
{value:'Intel Pentium E5400 2.7 GHz (2 cores)',label:'Intel Pentium E5400 2.7 GHz (2 cores)'},
{value:'Intel Pentium J4205 1.5 GHz (4 cores)',label:'Intel Pentium J4205 1.5 GHz (4 cores)'},
{value:'AMD A6-4400M 2.7 GHz (2 cores)',label:'AMD A6-4400M 2.7 GHz (2 cores)'},
{value:'Intel Celeron B830 1.8 GHz (2 cores)',label:'Intel Celeron B830 1.8 GHz (2 cores)'},
{value:'Intel Pentium N4200 1.1 GHz (4 cores)',label:'Intel Pentium N4200 1.1 GHz (4 cores)'},
{value:'Intel Celeron 1000M 1.8 GHz (2 cores)',label:'Intel Celeron 1000M 1.8 GHz (2 cores)'},
{value:'AMD PRO A10-8700B 1.8 GHz (4 cores)',label:'AMD PRO A10-8700B 1.8 GHz (4 cores)'},
{value:'AMD PRO A12-8800B 2.1 GHz (4 cores)',label:'AMD PRO A12-8800B 2.1 GHz (4 cores)'},
{value:'Intel Core 2 Quad Q8200 2.3 GHz (4 cores)',label:'Intel Core 2 Quad Q8200 2.3 GHz (4 cores)'},
{value:'Intel Core 2 Duo T8300 2.4 GHz (2 cores)',label:'Intel Core 2 Duo T8300 2.4 GHz (2 cores)'},
{value:'Intel Core 2 Extreme Q9300 2.5 GHz (4 cores)',label:'Intel Core 2 Extreme Q9300 2.5 GHz (4 cores)'},
{value:'Intel Celeron 3205U 1.5 GHz (2 cores)',label:'Intel Celeron 3205U 1.5 GHz (2 cores)'},
{value:'AMD Phenom X4 9950 2.6 GHz (4 cores)',label:'AMD Phenom X4 9950 2.6 GHz (4 cores)'},
{value:'AMD Sempron 145 2.8 GHz (1 core)',label:'AMD Sempron 145 2.8 GHz (1 core)'},
{value:'AMD Phenom II X2 N620 2.8 GHz (2 cores)',label:'AMD Phenom II X2 N620 2.8 GHz (2 cores)'},
{value:'Intel Core i3-330M 2.1 GHz (2 cores)',label:'Intel Core i3-330M 2.1 GHz (2 cores)'},
{value:'Intel Pentium P6200 2.1 GHz (2 cores)',label:'Intel Pentium P6200 2.1 GHz (2 cores)'},
{value:'AMD A6-3620 2.2 GHz (4 cores)',label:'AMD A6-3620 2.2 GHz (4 cores)'},
{value:'Intel Core 2 Duo E6600 2.4 GHz (2 cores)',label:'Intel Core 2 Duo E6600 2.4 GHz (2 cores)'},
{value:'AMD A8-7100 1.8 GHz (4 cores)',label:'AMD A8-7100 1.8 GHz (4 cores)'},
{value:'AMD Athlon II X4 620 2.6 GHz (4 cores)',label:'AMD Athlon II X4 620 2.6 GHz (4 cores)'},
{value:'Intel Pentium E5300 2.6 GHz (2 cores)',label:'Intel Pentium E5300 2.6 GHz (2 cores)'},
{value:'AMD A8-4500M 1.9 GHz (4 cores)',label:'AMD A8-4500M 1.9 GHz (4 cores)'},
{value:'AMD A4-4300M 2.5 GHz (2 cores)',label:'AMD A4-4300M 2.5 GHz (2 cores)'},
{value:'Intel Core 2 Duo T7500 2.2 GHz (2 cores)',label:'Intel Core 2 Duo T7500 2.2 GHz (2 cores)'},
{value:'Intel Celeron 2955U 1.4 GHz (2 cores)',label:'Intel Celeron 2955U 1.4 GHz (2 cores)'},
{value:'Intel Core 2 Duo P8400 2.3 GHz (2 cores)',label:'Intel Core 2 Duo P8400 2.3 GHz (2 cores)'},
{value:'AMD Turion II P540 2.4 GHz (2 cores)',label:'AMD Turion II P540 2.4 GHz (2 cores)'},
{value:'Intel Pentium 2127U 1.9 GHz (2 cores)',label:'Intel Pentium 2127U 1.9 GHz (2 cores)'},
{value:'AMD A10-7300 1.9 GHz (4 cores)',label:'AMD A10-7300 1.9 GHz (4 cores)'},
{value:'Intel Celeron J3355 2.0 GHz (2 cores)',label:'Intel Celeron J3355 2.0 GHz (2 cores)'},
{value:'Intel Core 2 Duo P8600 2.4 GHz (2 cores)',label:'Intel Core 2 Duo P8600 2.4 GHz (2 cores)'},
{value:'Intel Pentium E2220 2.4 GHz (2 cores)',label:'Intel Pentium E2220 2.4 GHz (2 cores)'},
{value:'Intel Pentium P6100 2.0 GHz (2 cores)',label:'Intel Pentium P6100 2.0 GHz (2 cores)'},
{value:'AMD A6-3500 2.1 GHz (3 cores)',label:'AMD A6-3500 2.1 GHz (3 cores)'},
{value:'AMD A10 PRO-7350B 2.1 GHz (4 cores)',label:'AMD A10 PRO-7350B 2.1 GHz (4 cores)'},
{value:'AMD Phenom X4 9850 2.5 GHz (4 cores)',label:'AMD Phenom X4 9850 2.5 GHz (4 cores)'},
{value:'Intel Core 2 Duo E6550 2.3 GHz (2 cores)',label:'Intel Core 2 Duo E6550 2.3 GHz (2 cores)'},
{value:'AMD A10-5745M 2.1 GHz (4 cores)',label:'AMD A10-5745M 2.1 GHz (4 cores)'},
{value:'Intel Pentium E5200 2.5 GHz (2 cores)',label:'Intel Pentium E5200 2.5 GHz (2 cores)'},
{value:'Intel Xeon E5405 2.0 GHz (4 cores)',label:'Intel Xeon E5405 2.0 GHz (4 cores)'},
{value:'Intel Core 2 Duo T8100 2.1 GHz (2 cores)',label:'Intel Core 2 Duo T8100 2.1 GHz (2 cores)'},
{value:'AMD Athlon II X2 240e 2.8 GHz (2 cores)',label:'AMD Athlon II X2 240e 2.8 GHz (2 cores)'},
{value:'Intel Celeron B815 1.6 GHz (2 cores)',label:'Intel Celeron B815 1.6 GHz (2 cores)'},
{value:'Intel Core 2 Duo T7700 2.4 GHz (2 cores)',label:'Intel Core 2 Duo T7700 2.4 GHz (2 cores)'},
{value:'Intel Celeron J3455 1.5 GHz (4 cores)',label:'Intel Celeron J3455 1.5 GHz (4 cores)'},
{value:'AMD A6-4455M 2.1 GHz (2 cores)',label:'AMD A6-4455M 2.1 GHz (2 cores)'},
{value:'Intel Celeron 1017U 1.6 GHz (2 cores)',label:'Intel Celeron 1017U 1.6 GHz (2 cores)'},
{value:'Intel Celeron N3350 1.1 GHz (2 cores)',label:'Intel Celeron N3350 1.1 GHz (2 cores)'},
{value:'AMD A8-3510MX 1.8 GHz (4 cores)',label:'AMD A8-3510MX 1.8 GHz (4 cores)'},
{value:'AMD Phenom X4 9550 2.2 GHz (4 cores)',label:'AMD Phenom X4 9550 2.2 GHz (4 cores)'},
{value:'Intel Celeron 1007U 1.5 GHz (2 cores)',label:'Intel Celeron 1007U 1.5 GHz (2 cores)'},
{value:'AMD Phenom X4 9650 2.3 GHz (4 cores)',label:'AMD Phenom X4 9650 2.3 GHz (4 cores)'},
{value:'Intel Core 2 Duo P7450 2.1 GHz (2 cores)',label:'Intel Core 2 Duo P7450 2.1 GHz (2 cores)'},
{value:'Intel Core 2 Duo E6700 2.7 GHz (2 cores)',label:'Intel Core 2 Duo E6700 2.7 GHz (2 cores)'},
{value:'Intel Core 2 Duo E4600 2.4 GHz (2 cores)',label:'Intel Core 2 Duo E4600 2.4 GHz (2 cores)'},
{value:'AMD A8-3520M 1.6 GHz (4 cores)',label:'AMD A8-3520M 1.6 GHz (4 cores)'},
{value:'Intel Pentium 997 1.6 GHz (2 cores)',label:'Intel Pentium 997 1.6 GHz (2 cores)'},
{value:'Intel Core 2 Duo T6670 2.2 GHz (2 cores)',label:'Intel Core 2 Duo T6670 2.2 GHz (2 cores)'},
{value:'AMD A8 PRO-7150B 1.9 GHz (4 cores)',label:'AMD A8 PRO-7150B 1.9 GHz (4 cores)'},
{value:'Intel Celeron B820 1.7 GHz (2 cores)',label:'Intel Celeron B820 1.7 GHz (2 cores)'},
{value:'AMD Athlon 64 X2 6000+ 3.0 GHz (2 cores)',label:'AMD Athlon 64 X2 6000+ 3.0 GHz (2 cores)'},
{value:'Intel Celeron E3400 2.6 GHz (2 cores)',label:'Intel Celeron E3400 2.6 GHz (2 cores)'},
{value:'Intel Pentium P6000 1.9 GHz (2 cores)',label:'Intel Pentium P6000 1.9 GHz (2 cores)'},
{value:'Intel Celeron N3450 1.1 GHz (4 cores)',label:'Intel Celeron N3450 1.1 GHz (4 cores)'},
{value:'AMD Athlon 64 X2 5600+ 2.8 GHz (2 cores)',label:'AMD Athlon 64 X2 5600+ 2.8 GHz (2 cores)'},
{value:'AMD A8-5545M 1.7 GHz (4 cores)',label:'AMD A8-5545M 1.7 GHz (4 cores)'},
{value:'Intel Core 2 Duo E4500 2.2 GHz (2 cores)',label:'Intel Core 2 Duo E4500 2.2 GHz (2 cores)'},
{value:'AMD Phenom X4 9750 2.4 GHz (4 cores)',label:'AMD Phenom X4 9750 2.4 GHz (4 cores)'},
{value:'AMD Athlon II X2 235e 2.7 GHz (2 cores)',label:'AMD Athlon II X2 235e 2.7 GHz (2 cores)'},
{value:'AMD A6-3410MX 1.6 GHz (4 cores)',label:'AMD A6-3410MX 1.6 GHz (4 cores)'},
{value:'AMD A4-3310MX 2.1 GHz (2 cores)',label:'AMD A4-3310MX 2.1 GHz (2 cores)'},
{value:'Intel Core i3-2375M 1.5 GHz (2 cores)',label:'Intel Core i3-2375M 1.5 GHz (2 cores)'},
{value:'AMD A4-3305M 1.9 GHz (2 cores)',label:'AMD A4-3305M 1.9 GHz (2 cores)'},
{value:'Intel Core 2 Duo P7550 2.3 GHz (2 cores)',label:'Intel Core 2 Duo P7550 2.3 GHz (2 cores)'},
{value:'Intel Core 2 Duo T7300 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T7300 2.0 GHz (2 cores)'},
{value:'AMD Phenom II X3 N830 2.1 GHz (3 cores)',label:'AMD Phenom II X3 N830 2.1 GHz (3 cores)'},
{value:'Intel Core 2 Duo T6600 2.2 GHz (2 cores)',label:'Intel Core 2 Duo T6600 2.2 GHz (2 cores)'},
{value:'Intel Pentium 987 1.5 GHz (2 cores)',label:'Intel Pentium 987 1.5 GHz (2 cores)'},
{value:'AMD A10-4655M 2.0 GHz (4 cores)',label:'AMD A10-4655M 2.0 GHz (4 cores)'},
{value:'AMD Phenom II X4 N970 2.2 GHz (4 cores)',label:'AMD Phenom II X4 N970 2.2 GHz (4 cores)'},
{value:'Intel Core i3-2377M 1.5 GHz (2 cores)',label:'Intel Core i3-2377M 1.5 GHz (2 cores)'},
{value:'Intel Core 2 Duo E6320 1.9 GHz (2 cores)',label:'Intel Core 2 Duo E6320 1.9 GHz (2 cores)'},
{value:'Intel Core 2 Duo P7350 2.0 GHz (2 cores)',label:'Intel Core 2 Duo P7350 2.0 GHz (2 cores)'},
{value:'Intel Core 2 Duo T7400 2.2 GHz (2 cores)',label:'Intel Core 2 Duo T7400 2.2 GHz (2 cores)'},
{value:'Intel Pentium T4500 2.3 GHz (2 cores)',label:'Intel Pentium T4500 2.3 GHz (2 cores)'},
{value:'Intel Core 2 Duo T7200 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T7200 2.0 GHz (2 cores)'},
{value:'Intel Pentium T4400 2.2 GHz (2 cores)',label:'Intel Pentium T4400 2.2 GHz (2 cores)'},
{value:'Intel Celeron 877 1.4 GHz (2 cores)',label:'Intel Celeron 877 1.4 GHz (2 cores)'},
{value:'AMD Turion II Neo N54L 2.2 GHz (2 cores)',label:'AMD Turion II Neo N54L 2.2 GHz (2 cores)'},
{value:'Intel Core 2 Duo T6400 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T6400 2.0 GHz (2 cores)'},
{value:'AMD V140 2.3 GHz (1 core)',label:'AMD V140 2.3 GHz (1 core)'},
{value:'AMD A8-7410 2.2 GHz (4 cores)',label:'AMD A8-7410 2.2 GHz (4 cores)'},
{value:'Intel Pentium E2200 2.2 GHz (2 cores)',label:'Intel Pentium E2200 2.2 GHz (2 cores)'},
{value:'Intel Celeron E1500 2.2 GHz (2 cores)',label:'Intel Celeron E1500 2.2 GHz (2 cores)'},
{value:'Intel Core 2 Duo T6500 2.1 GHz (2 cores)',label:'Intel Core 2 Duo T6500 2.1 GHz (2 cores)'},
{value:'Intel Celeron T3500 2.1 GHz (2 cores)',label:'Intel Celeron T3500 2.1 GHz (2 cores)'},
{value:'AMD A6-3420M 1.5 GHz (4 cores)',label:'AMD A6-3420M 1.5 GHz (4 cores)'},
{value:'Intel Atom x7-E3950 1.6 GHz (4 cores)',label:'Intel Atom x7-E3950 1.6 GHz (4 cores)'},
{value:'Intel Pentium T4200 2.0 GHz (2 cores)',label:'Intel Pentium T4200 2.0 GHz (2 cores)'},
{value:'Intel Pentium T4300 2.1 GHz (2 cores)',label:'Intel Pentium T4300 2.1 GHz (2 cores)'},
{value:'AMD A4-3300M 1.9 GHz (2 cores)',label:'AMD A4-3300M 1.9 GHz (2 cores)'},
{value:'Intel Pentium T3400 2.2 GHz (2 cores)',label:'Intel Pentium T3400 2.2 GHz (2 cores)'},
{value:'Intel Celeron 900 2.2 GHz (1 core)',label:'Intel Celeron 900 2.2 GHz (1 core)'},
{value:'AMD Turion II P520 2.3 GHz (2 cores)',label:'AMD Turion II P520 2.3 GHz (2 cores)'},
{value:'Intel Core i3-2367M 1.4 GHz (2 cores)',label:'Intel Core i3-2367M 1.4 GHz (2 cores)'},
{value:'AMD A8-6410 2.0 GHz (4 cores)',label:'AMD A8-6410 2.0 GHz (4 cores)'},
{value:'AMD Phenom II X4 N930 2.0 GHz (4 cores)',label:'AMD Phenom II X4 N930 2.0 GHz (4 cores)'},
{value:'Intel Core i5-2537M 1.4 GHz (2 cores)',label:'Intel Core i5-2537M 1.4 GHz (2 cores)'},
{value:'AMD Athlon II P360 2.3 GHz (2 cores)',label:'AMD Athlon II P360 2.3 GHz (2 cores)'},
{value:'Intel Core 2 Duo T6570 2.1 GHz (2 cores)',label:'Intel Core 2 Duo T6570 2.1 GHz (2 cores)'},
{value:'Intel Core i3-2365M 1.4 GHz (2 cores)',label:'Intel Core i3-2365M 1.4 GHz (2 cores)'},
{value:'AMD A4-3330MX 2.2 GHz (2 cores)',label:'AMD A4-3330MX 2.2 GHz (2 cores)'},
{value:'AMD A6-7310 2.0 GHz (4 cores)',label:'AMD A6-7310 2.0 GHz (4 cores)'},
{value:'Intel Core 2 Duo E6300 1.9 GHz (2 cores)',label:'Intel Core 2 Duo E6300 1.9 GHz (2 cores)'},
{value:'AMD A8-4555M 1.6 GHz (4 cores)',label:'AMD A8-4555M 1.6 GHz (4 cores)'},
{value:'AMD A4 Pro-3350B 2.0 GHz (4 cores)',label:'AMD A4 Pro-3350B 2.0 GHz (4 cores)'},
{value:'AMD Athlon 5350 2.0 GHz (4 cores)',label:'AMD Athlon 5350 2.0 GHz (4 cores)'},
{value:'Intel Core 2 Duo L9400 1.9 GHz (2 cores)',label:'Intel Core 2 Duo L9400 1.9 GHz (2 cores)'},
{value:'AMD Athlon II P320 2.1 GHz (2 cores)',label:'AMD Athlon II P320 2.1 GHz (2 cores)'},
{value:'AMD Phenom X3 8450 2.1 GHz (3 cores)',label:'AMD Phenom X3 8450 2.1 GHz (3 cores)'},
{value:'Intel Core 2 Duo T5550 1.8 GHz (2 cores)',label:'Intel Core 2 Duo T5550 1.8 GHz (2 cores)'},
{value:'AMD Phenom II X2 N660 3.0 GHz (2 cores)',label:'AMD Phenom II X2 N660 3.0 GHz (2 cores)'},
{value:'Intel Celeron E3200 2.4 GHz (2 cores)',label:'Intel Celeron E3200 2.4 GHz (2 cores)'},
{value:'Intel Core 2 Duo E4400 2.0 GHz (2 cores)',label:'Intel Core 2 Duo E4400 2.0 GHz (2 cores)'},
{value:'Intel Celeron B800 1.5 GHz (2 cores)',label:'Intel Celeron B800 1.5 GHz (2 cores)'},
{value:'Intel Core 2 Duo T5850 2.2 GHz (2 cores)',label:'Intel Core 2 Duo T5850 2.2 GHz (2 cores)'},
{value:'Intel Pentium E2180 2.0 GHz (2 cores)',label:'Intel Pentium E2180 2.0 GHz (2 cores)'},
{value:'AMD A8-3500M 1.5 GHz (4 cores)',label:'AMD A8-3500M 1.5 GHz (4 cores)'},
{value:'AMD A6-6310 1.8 GHz (4 cores)',label:'AMD A6-6310 1.8 GHz (4 cores)'},
{value:'AMD A4-7210 1.8 GHz (4 cores)',label:'AMD A4-7210 1.8 GHz (4 cores)'},
{value:'Intel Pentium T3200 2.0 GHz (2 cores)',label:'Intel Pentium T3200 2.0 GHz (2 cores)'},
{value:'Intel Core 2 Duo E4300 1.8 GHz (2 cores)',label:'Intel Core 2 Duo E4300 1.8 GHz (2 cores)'},
{value:'Intel Core 2 Duo E6400 2.1 GHz (2 cores)',label:'Intel Core 2 Duo E6400 2.1 GHz (2 cores)'},
{value:'Intel Core 2 Duo T5870 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T5870 2.0 GHz (2 cores)'},
{value:'Intel Core 2 Duo T5800 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T5800 2.0 GHz (2 cores)'},
{value:'AMD A6-3400M 1.4 GHz (4 cores)',label:'AMD A6-3400M 1.4 GHz (4 cores)'},
{value:'Intel Core 2 Duo T7100 1.8 GHz (2 cores)',label:'Intel Core 2 Duo T7100 1.8 GHz (2 cores)'},
{value:'Intel Core 2 Duo T7250 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T7250 2.0 GHz (2 cores)'},
{value:'Intel Pentium D 945/950 3.4 GHz (2 cores)',label:'Intel Pentium D 945/950 3.4 GHz (2 cores)'},
{value:'AMD Athlon 64 X2 5000+ 2.6 GHz (2 cores)',label:'AMD Athlon 64 X2 5000+ 2.6 GHz (2 cores)'},
{value:'Intel Pentium T2390 1.9 GHz (2 cores)',label:'Intel Pentium T2390 1.9 GHz (2 cores)'},
{value:'AMD A6-5200 2.0 GHz (4 cores)',label:'AMD A6-5200 2.0 GHz (4 cores)'},
{value:'Intel Pentium N3540 2.2 GHz (4 cores)',label:'Intel Pentium N3540 2.2 GHz (4 cores)'},
{value:'AMD Phenom II X3 P820 1.8 GHz (3 cores)',label:'AMD Phenom II X3 P820 1.8 GHz (3 cores)'},
{value:'Intel Pentium J3710 1.6 GHz (4 cores)',label:'Intel Pentium J3710 1.6 GHz (4 cores)'},
{value:'Intel Atom x7-Z8750 1.6 GHz (4 cores)',label:'Intel Atom x7-Z8750 1.6 GHz (4 cores)'},
{value:'AMD Athlon 64 X2 4200+ 2.2 GHz (2 cores)',label:'AMD Athlon 64 X2 4200+ 2.2 GHz (2 cores)'},
{value:'AMD Athlon II P340 2.2 GHz (2 cores)',label:'AMD Athlon II P340 2.2 GHz (2 cores)'},
{value:'Intel Atom x7-Z8700 1.6 GHz (4 cores)',label:'Intel Atom x7-Z8700 1.6 GHz (4 cores)'},
{value:'Intel Pentium N3530 2.2 GHz (4 cores)',label:'Intel Pentium N3530 2.2 GHz (4 cores)'},
{value:'AMD Athlon II X2 250u 1.6 GHz (2 cores)',label:'AMD Athlon II X2 250u 1.6 GHz (2 cores)'},
{value:'Intel Atom x5-Z8550 1.4 GHz (4 cores)',label:'Intel Atom x5-Z8550 1.4 GHz (4 cores)'},
{value:'Intel Pentium N3700 1.6 GHz (4 cores)',label:'Intel Pentium N3700 1.6 GHz (4 cores)'},
{value:'Intel Atom Z3795 1.6 GHz (4 cores)',label:'Intel Atom Z3795 1.6 GHz (4 cores)'},
{value:'AMD Athlon 64 X2 3800+ 2.0 GHz (2 cores)',label:'AMD Athlon 64 X2 3800+ 2.0 GHz (2 cores)'},
{value:'Intel Celeron N3160 1.6 GHz (4 cores)',label:'Intel Celeron N3160 1.6 GHz (4 cores)'},
{value:'Intel Core 2 Duo T5750 2.0 GHz (2 cores)',label:'Intel Core 2 Duo T5750 2.0 GHz (2 cores)'},
{value:'Intel Celeron J1900 2.0 GHz (4 cores)',label:'Intel Celeron J1900 2.0 GHz (4 cores)'},
{value:'AMD GX-420CA 2.0 GHz (4 cores)',label:'AMD GX-420CA 2.0 GHz (4 cores)'},
{value:'Intel Core i3-380UM 1.3 GHz (2 cores)',label:'Intel Core i3-380UM 1.3 GHz (2 cores)'},
{value:'AMD E2-7110 1.8 GHz (4 cores)',label:'AMD E2-7110 1.8 GHz (4 cores)'},
{value:'Intel Celeron J3160 1.6 GHz (4 cores)',label:'Intel Celeron J3160 1.6 GHz (4 cores)'},
{value:'Intel Celeron N2840 2.2 GHz (2 cores)',label:'Intel Celeron N2840 2.2 GHz (2 cores)'},
{value:'Intel Celeron J3060 1.6 GHz (2 cores)',label:'Intel Celeron J3060 1.6 GHz (2 cores)'},
{value:'Intel Atom x5-Z8500 1.4 GHz (4 cores)',label:'Intel Atom x5-Z8500 1.4 GHz (4 cores)'},
{value:'AMD Turion 64 X2 TL-60 2.0 GHz (2 cores)',label:'AMD Turion 64 X2 TL-60 2.0 GHz (2 cores)'},
{value:'AMD Phenom X4 9500 2.2 GHz (4 cores)',label:'AMD Phenom X4 9500 2.2 GHz (4 cores)'},
{value:'Intel Celeron N2820 2.1 GHz (2 cores)',label:'Intel Celeron N2820 2.1 GHz (2 cores)'},
{value:'Intel Celeron N2830 2.2 GHz (2 cores)',label:'Intel Celeron N2830 2.2 GHz (2 cores)'},
{value:'AMD A4-6210 1.8 GHz (4 cores)',label:'AMD A4-6210 1.8 GHz (4 cores)'},
{value:'Intel Core 2 Duo U9400 1.4 GHz (2 cores)',label:'Intel Core 2 Duo U9400 1.4 GHz (2 cores)'},
{value:'Intel Pentium N3520 2.2 GHz (4 cores)',label:'Intel Pentium N3520 2.2 GHz (4 cores)'},
{value:'AMD Athlon 64 X2 4000+ 2.1 GHz (2 cores)',label:'AMD Athlon 64 X2 4000+ 2.1 GHz (2 cores)'},
{value:'Intel Celeron N2940 1.8 GHz (4 cores)',label:'Intel Celeron N2940 1.8 GHz (4 cores)'},
{value:'Intel Celeron 847 1.1 GHz (2 cores)',label:'Intel Celeron 847 1.1 GHz (2 cores)'},
{value:'Intel Pentium D 830/925/930 3.0 GHz (2 cores)',label:'Intel Pentium D 830/925/930 3.0 GHz (2 cores)'},
{value:'Intel Celeron N2930 1.8 GHz (4 cores)',label:'Intel Celeron N2930 1.8 GHz (4 cores)'},
{value:'Intel Celeron N3150 1.6 GHz (4 cores)',label:'Intel Celeron N3150 1.6 GHz (4 cores)'},
{value:'Intel Pentium E2140 1.6 GHz (2 cores)',label:'Intel Pentium E2140 1.6 GHz (2 cores)'},
{value:'Intel Pentium E2160 1.8 GHz (2 cores)',label:'Intel Pentium E2160 1.8 GHz (2 cores)'},
{value:'AMD Turion II Neo N40L 1.5 GHz (2 cores)',label:'AMD Turion II Neo N40L 1.5 GHz (2 cores)'},
{value:'Intel Celeron N3050 1.6 GHz (2 cores)',label:'Intel Celeron N3050 1.6 GHz (2 cores)'},
{value:'Intel Atom x5-E8000 1.0 GHz (4 cores)',label:'Intel Atom x5-E8000 1.0 GHz (4 cores)'},
{value:'Intel Core 2 Duo SU7300 1.3 GHz (2 cores)',label:'Intel Core 2 Duo SU7300 1.3 GHz (2 cores)'},
{value:'Intel Pentium SU4100 1.3 GHz (2 cores)',label:'Intel Pentium SU4100 1.3 GHz (2 cores)'},
{value:'Intel Pentium D 820/915/920 2.8 GHz (2 cores)',label:'Intel Pentium D 820/915/920 2.8 GHz (2 cores)'},
{value:'Intel Core i5-470UM 1.3 GHz (2 cores)',label:'Intel Core i5-470UM 1.3 GHz (2 cores)'},
{value:'AMD Athlon X2 QL-62 2.0 GHz (2 cores)',label:'AMD Athlon X2 QL-62 2.0 GHz (2 cores)'},
{value:'Intel Pentium 4 531/630 3.0 GHz (1 core)',label:'Intel Pentium 4 531/630 3.0 GHz (1 core)'},
{value:'AMD A4-5000 1.5 GHz (4 cores)',label:'AMD A4-5000 1.5 GHz (4 cores)'},
{value:'Intel Celeron N2815 1.9 GHz (2 cores)',label:'Intel Celeron N2815 1.9 GHz (2 cores)'},
{value:'AMD E2-6110 1.5 GHz (4 cores)',label:'AMD E2-6110 1.5 GHz (4 cores)'},
{value:'AMD E1-7010 1.5 GHz (2 cores)',label:'AMD E1-7010 1.5 GHz (2 cores)'},
{value:'Intel Atom x5-Z8350 1.4 GHz (4 cores)',label:'Intel Atom x5-Z8350 1.4 GHz (4 cores)'},
{value:'Intel Celeron SU2300 1.2 GHz (2 cores)',label:'Intel Celeron SU2300 1.2 GHz (2 cores)'},
{value:'Intel Pentium 4 540/541 3.2 GHz (1 core)',label:'Intel Pentium 4 540/541 3.2 GHz (1 core)'},
{value:'AMD E1-2500 1.4 GHz (2 cores)',label:'AMD E1-2500 1.4 GHz (2 cores)'},
{value:'Intel Atom x5-Z8300 1.4 GHz (4 cores)',label:'Intel Atom x5-Z8300 1.4 GHz (4 cores)'},
{value:'AMD E1-6015 1.4 GHz (2 cores)',label:'AMD E1-6015 1.4 GHz (2 cores)'},
{value:'AMD Sempron 2650 1.4 GHz (2 cores)',label:'AMD Sempron 2650 1.4 GHz (2 cores)'},
{value:'Intel Celeron N3000 1.0 GHz (2 cores)',label:'Intel Celeron N3000 1.0 GHz (2 cores)'},
{value:'AMD E2-2000 1.8 GHz (2 cores)',label:'AMD E2-2000 1.8 GHz (2 cores)'},
{value:'AMD E1-6010 1.4 GHz (2 cores)',label:'AMD E1-6010 1.4 GHz (2 cores)'},
{value:'AMD E2-1800 1.7 GHz (2 cores)',label:'AMD E2-1800 1.7 GHz (2 cores)'},
{value:'AMD E-350 1.6 GHz (2 cores)',label:'AMD E-350 1.6 GHz (2 cores)'},
{value:'AMD E1-1200 1.4 GHz (2 cores)',label:'AMD E1-1200 1.4 GHz (2 cores)'},
{value:'AMD E1-1500 1.5 GHz (2 cores)',label:'AMD E1-1500 1.5 GHz (2 cores)'},
{value:'AMD E-450 1.6 GHz (2 cores)',label:'AMD E-450 1.6 GHz (2 cores)'},
{value:'AMD C-60 1.0 GHz (2 cores)',label:'AMD C-60 1.0 GHz (2 cores)'},
{value:'AMD E1-2100 1.0 GHz (2 cores)',label:'AMD E1-2100 1.0 GHz (2 cores)'},
{value:'AMD E-300 1.3 GHz (2 cores)',label:'AMD E-300 1.3 GHz (2 cores)'},
{value:'Intel Atom D525 1.8 GHz (2 cores)',label:'Intel Atom D525 1.8 GHz (2 cores)'},
{value:'AMD C-50 1.0 GHz (2 cores)',label:'AMD C-50 1.0 GHz (2 cores)'},
{value:'Intel Atom N570 1.7 GHz (2 cores)',label:'Intel Atom N570 1.7 GHz (2 cores)'},

]

const rams = [
    {value: '1GB', label: '1GB'},
    {value: '2GB', label: '2GB'},
    {value: '3GB', label: '3GB'},
    {value: '4GB', label: '4GB'},
    {value: '5GB', label: '5GB'},
    {value: '6GB', label: '6GB'},
    {value: '7GB', label: '7GB'},
    {value: '8GB', label: '8GB'},
    {value: '9GB', label: '9GB'},
    {value: '10GB', label: '10GB'},
    {value: '11GB', label: '11GB'},
    {value: '12GB', label: '12GB'},
    {value: '13GB', label: '13GB'},
    {value: '14GB', label: '14GB'},
    {value: '15GB', label: '15GB'},
    {value: '16GB', label: '16GB'},
]


class Rigpost extends Component {
    state = {
        game: '',
        cpu: '',
        gpu: '',
        ram: '',
        cpuscore: '',
        gpuscore: '',
        ramscore: '',

        gamecpu: '',
        gamegpu: '',
        gamemem: '',

        gamecpuscore: '',
        gamegpuscore: '',
        gamememscore: '',


    selectedOption: null,
    selectedOptioncpu: null,

  

    }

    componentDidMount () {

        console.log('Mounted')
        console.log(this.props.gamememfromprops)
        console.log(this.props.gamecpufromprops)
        console.log(this.props.gamegpufromprops)

        this.setState({
            gamecpu: 'Intel '+ this.props.gamecpufromprops.replace('GHz',' GHz'),
            gamegpu: this.props.gamegpufromprops,
            gamemem: this.props.gamememfromprops.replace(' GB','GB'),
            
        },
        /*() => console.log(this.state.gamecpu,this.state.gamegpu,this.state.gamemem)) */

        () => this.rigscoreHandlergame()
    )


       

       
    

        

        
        

/* 
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props.location.search.replace('?',''))
        this.setState({game: this.props.location.search.replace('?','')})

        axios.get('/' + this.props.location.search.replace('?',''))
        .then(response => {
            this.setState({
                gamecpu: response.data.processor,
                gamegpu: response.data.Graphics,
                gameram: response.data.Memory
            })
        }) */
 }
    rigscoreHandlergame = () => {
        axios.get('https://warm-island-31012.herokuapp.com/cpuscoresfinl/' + this.state.gamecpu)
        .then(response => {
            console.log(response)
            this.setState({
                gamecpuscore: response.data.score
            }, () => console.log(this.state.gamecpuscore))
            }).catch(err => {
                console.log(err)
        }),

        axios.get('https://warm-island-31012.herokuapp.com/gpuscoresfinl/' +  this.state.gamegpu)
        .then(response => {
            console.log(response.data.score)
            this.setState({
                gamegpuscore: response.data.score
            },console.log(this.state.gamegpuscore))
            }).catch(err => {
                console.log(err)
        }),

        axios.get('https://warm-island-31012.herokuapp.com/ramscores/' + this.state.gamemem)
        .then(response => {
            this.setState({
                gamememscore: response.data.score
            },console.log(this.state.gamememscore))
            }).catch(err => {
                console.log(err)
        })
    }


    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }

    handleChangeram = selectedOptionram => {
        this.setState({ selectedOptionram });
        console.log(`Option selected:`, selectedOptionram);
        this.setState({ram: selectedOptionram.value})
      };

    handleChangegpu = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.setState({gpu: selectedOption.value})
      };

      handleChangecpu = selectedOptioncpu => {
        this.setState({ selectedOptioncpu });
        console.log(`Option selected:`, selectedOptioncpu);
        this.setState({cpu: selectedOptioncpu.value})
        
       
      };

    handlePost = (e) => {
        e.preventDefault();
        console.log(this.state)

        console.log(this.state.cpu) 

        /*        axios.get('http://localhost:3000/cpuscores/'+ this.state.cpu) */
       
       axios.get('https://warm-island-31012.herokuapp.com/cpuscores/'+ this.state.cpu)        
        .then(response => {
            console.log(response)
            this.setState({
                cpuscore: response.data.score
            })
        })

/*         axios.get('http://localhost:3000/gpuscores/'+ this.state.gpu) */
        axios.get('https://warm-island-31012.herokuapp.com/gpuscores/'+ this.state.gpu)
        .then(response => {
            console.log(response)
            this.setState({
                gpuscore: response.data.score
            })
        })


        axios.get('https://warm-island-31012.herokuapp.com/ramscores/' + this.state.ram)
        .then(response => {
            this.setState({
                ramscore: response.data.score
            })
        })


        if(this.state.gpuscore){
            console.log(this.state.cpuscore)            
            console.log(this.state.gpuscore)
            console.log(this.state.ramscore)
        }


    /*     const rig = {
         cpu : this.state.cpu,
         gpu : this.state.gpu,
         ram : this.state.ram
        }
 */
        /* axios.post('url', rig)
        .then(response => {
            this.setState({
                cpuscore: response.data.cpuscore,
                gpuscore: response.data.gpuscore,
                ramscore: response.data.ramscore,
            })

        }).catch(error => {
            this.setState({ermessage: true})
        })
     */
    }

    /* rigscoreHandler = () => {
        this.setState({
            cpuscore: 80,
            gpuscore: 60,
            ramscore: 80
        })
    } */


    render () {
        
    const { selectedOption } = this.state;
    const { selectedOptioncpu } = this.state;
    const { selectedOptionram } = this.state;



        return (
       
       <div className="container">

       <div style={{color: 'white', fontFamily: 'ZCOOL QingKe HuangYou', textAlign:'center', marginTop: '8px'}}>
      

       <h1>{/* 'Intel '+  */this.state.gamecpu/* .replace('GHz',' GHz') */}</h1>
       <h1>{this.state.gamegpu}</h1>
       <h1>{this.state.gamemem}</h1>

       </div>


       <h1 className="gametitle" style={{textAlign: 'center', marginTop: '3px'}}>{this.state.game.replace('requirements', 'requirements check')}</h1>
       
       
       {this.state.gamegpuscore ?
       <Rigscore 
                          cpuscore={this.state.gamecpuscore / 14.13}
                          gpuscore={this.state.gamegpuscore / 95.55}
                          ramscore={this.state.gamememscore / 0.16}></Rigscore> : null }

            <form onSubmit={this.handlePost} className="white">
            <h5 className="grey-text text-darken-3" style={{ textAlign: 'center' }}>Can I run it</h5>
            
          
        {/*    <div className="input-field">
            <label htmlFor="cpu">CPU</label>
            <input type ="text" id="cpu" onChange={this.handleChnge}></input>
            </div> */}

            {/* <div className="input-field">
            <label htmlFor="gpu">GPU</label>
            <input type ="text" id="gpu" onChange={this.handleChnge}></input>
            </div> */}

            
        <p style={{paddingTop: '3px'}}>CPU</p>
<Select
        value={selectedOptioncpu}
        onChange={this.handleChangecpu}
        options={cpus}
        
      />

      <p style={{paddingTop: '3px'}}>GPU</p>
<Select
        value={selectedOption}
        onChange={this.handleChangegpu}
        options={gpus}
        
      />
      <p style={{paddingTop: '3px'}}>RAM</p>
<Select
        value={selectedOptionram}
        onChange={this.handleChangeram}
        options={rams}
        
      />

       {/*      <div className="input-field">
            <label htmlFor="ram">RAM</label>
            <input type ="text" id="ram" onChange={this.handleChnge}></input>
            </div>
  */}


         
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1" /* onClick={() => this.rigscoreHandler()} */>Run Test</button>
                </div>

                
            
            </form>
            
            
        
            {this.state.cpuscore ?
                <Rigscore 
                ramscore={this.state.ramscore / 0.16}
                cpuscore={this.state.cpuscore / 14.13}
                gpuscore={this.state.gpuscore / 95.55}
                /> : null }

        


       {/*      <div className="rigform">
                <h3>CPU : {this.state.cpu}</h3>
                <h3>GPU : {this.state.gpu}</h3>
                <h3>RAM : {this.state.ram}</h3>
            </div>
        */}     
        

        </div>

        )
    }
}


const mapSToProps = (state) => {
    return {
        gamecpufromprops: state.cpu,
        gamegpufromprops: state.gpu,
        gamememfromprops: state.ram
    }
}

export default connect(mapSToProps)(Rigpost);
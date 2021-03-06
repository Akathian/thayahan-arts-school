import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
            // style({ opacity: 0.5, transform: 'translateY(-25px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }
  option = 'All';
  options = ['all', "malarum-vannangal-2017", 'malarum-vannangal-2018', "malarum-vannangal-2019"]
  images1 = [];
  images2 = [];
  images3 = [];
  eventSelected: String;

  images = {
    "all": [
      'https://i.imgur.com/hVUWtdr.jpg',
      'https://i.imgur.com/ZC04cIc.jpg',
      'https://i.imgur.com/OmO1Khq.jpg',
      'https://i.imgur.com/IaRyhlW.jpg',
      'https://i.imgur.com/8qQTevW.jpg',
      'https://i.imgur.com/Z4vpF8L.jpg',
      'https://i.imgur.com/23qzSbI.jpg',
      'https://i.imgur.com/K7ffwMg.jpg',
      'https://i.imgur.com/vtyd2ra.jpg',
      'https://i.imgur.com/9aqjSou.jpg',
      'https://i.imgur.com/5moJonR.jpg',
      'https://i.imgur.com/K5vF4qf.jpg',
      'https://i.imgur.com/WGcLzTr.jpg',
      'https://i.imgur.com/dd8hQ7J.jpg',
      'https://i.imgur.com/Bfc5DuV.jpg',
      'https://i.imgur.com/tCXZrFK.jpg',
      'https://i.imgur.com/35JxTn7.jpg',
      'https://i.imgur.com/fH07aDD.jpg',
      'https://i.imgur.com/xgjGVZY.jpg',
      'https://i.imgur.com/W4BTZqB.jpg',
      'https://i.imgur.com/BCiQrb1.jpg',
      'https://i.imgur.com/zTdfQq3.jpg',
      'https://i.imgur.com/VbsDDwy.jpg',
      'https://i.imgur.com/UTUlvs6.jpg',
      'https://i.imgur.com/7Ku5S0K.jpg',
      'https://i.imgur.com/3wZ1GUj.jpg',
      'https://i.imgur.com/bkKPzET.jpg',
      'https://i.imgur.com/QDU1cAb.jpg',
      'https://i.imgur.com/Sy7pbwN.jpg',
      'https://i.imgur.com/M4ewoeW.jpg',
      'https://i.imgur.com/DfCRfRV.jpg',
      'https://i.imgur.com/zRzXMjy.jpg',
      'https://i.imgur.com/iDk6Ub0.jpg',
      'https://i.imgur.com/4bXXtvm.jpg',
      'https://i.imgur.com/RSmJcc2.jpg',
      'https://i.imgur.com/Hrd8BcE.jpg',
      'https://i.imgur.com/09FbieY.jpg',
      'https://i.imgur.com/gOL8YFP.jpg',
      'https://i.imgur.com/MzM68Ao.jpg',
      'https://i.imgur.com/RridgMb.jpg',
      'https://i.imgur.com/qCIuKMB.jpg',
      'https://i.imgur.com/HjUClvz.jpg',
      'https://i.imgur.com/hnWiheR.jpg',
      'https://i.imgur.com/bb04oya.jpg',
      'https://i.imgur.com/oi30LZn.jpg',
      'https://i.imgur.com/7AMZ9LN.jpg',
      'https://i.imgur.com/7THSVc6.jpg',
      'https://i.imgur.com/xcf6h4I.jpg',
      'https://i.imgur.com/IYz8Oul.jpg',
      'https://i.imgur.com/ZymThNl.jpg',
      'https://i.imgur.com/bctUPjw.jpg',
      'https://i.imgur.com/3qJ27CR.jpg',
      'https://i.imgur.com/RNzYWxv.jpg',
      'https://i.imgur.com/crMfmfR.jpg',
      'https://i.imgur.com/bsP62Yu.jpg',
      'https://i.imgur.com/SzK0ncn.jpg',
      'https://i.imgur.com/LVFvlUf.jpg',
      'https://i.imgur.com/Fxi5bi1.jpg',
      'https://i.imgur.com/olgMyTx.jpg',
      'https://i.imgur.com/mr08wI2.jpg',
      'https://i.imgur.com/YtAAlDZ.jpg',
      'https://i.imgur.com/ei6oofl.jpg',
      'https://i.imgur.com/DWnU4fB.jpg',
      'https://i.imgur.com/fQuyhzq.jpg',
      'https://i.imgur.com/1mub7sT.jpg',
      'https://i.imgur.com/gXibcN9.jpg',
      'https://i.imgur.com/ItOmzKV.jpg',
      'https://i.imgur.com/kYN99ny.jpg',
      'https://i.imgur.com/mcWKOlT.jpg',
      'https://i.imgur.com/YCSQKpz.jpg',
      'https://i.imgur.com/vBg8hce.jpg',
      'https://i.imgur.com/0CVVS5C.jpg',
      'https://i.imgur.com/PdWoOdV.jpg',
      'https://i.imgur.com/pLgvN5a.jpg',
      'https://i.imgur.com/dHfPLZr.jpg',
      'https://i.imgur.com/XlX3kjf.jpg',
      'https://i.imgur.com/OIb1Zu9.jpg',
      'https://i.imgur.com/rAnlNjH.jpg',
      'https://i.imgur.com/NTDXO94.jpg',
      'https://i.imgur.com/JwcpCTi.jpg',
      'https://i.imgur.com/8JYZATd.jpg',
      'https://i.imgur.com/yu1wcn9.jpg',
      'https://i.imgur.com/Co9BOrw.jpg',
      'https://i.imgur.com/RzBtnz1.jpg',
      'https://i.imgur.com/qRyNtLp.jpg',
      'https://i.imgur.com/tlcA1P6.jpg',
      'https://i.imgur.com/Uvujgni.jpg',
      'https://i.imgur.com/GogaEcA.jpg',
      'https://i.imgur.com/6YPHbDz.jpg',
      'https://i.imgur.com/xwDZ0SX.jpg',
      'https://i.imgur.com/IEXsCYd.jpg',
      'https://i.imgur.com/iGSHh92.jpg',
      'https://i.imgur.com/mpBax8K.jpg',
      'https://i.imgur.com/RXebGkJ.jpg',
      'https://i.imgur.com/uRONumy.jpg',
      'https://i.imgur.com/GgMn9I8.jpg',
      'https://i.imgur.com/vJTe0eS.jpg',
      'https://i.imgur.com/zqKhu2W.jpg',
      'https://i.imgur.com/Ncwgahm.jpg',
      'https://i.imgur.com/AOGaLlV.jpg',
      'https://i.imgur.com/Al2I8CV.jpg',
      'https://i.imgur.com/kuW97cz.jpg',
      'https://i.imgur.com/PItaWSG.jpg',
      'https://i.imgur.com/ioNtP0S.jpg',
      'https://i.imgur.com/LRkIvT6.jpg',
      'https://i.imgur.com/EzBrh7i.jpg',
      'https://i.imgur.com/Q57FBBU.jpg',
      'https://i.imgur.com/g55kNlx.jpg',
      'https://i.imgur.com/FAV4eec.jpg',
      'https://i.imgur.com/s60w7qe.jpg',
      'https://i.imgur.com/Uq9CDY0.jpg',
      'https://i.imgur.com/BaGC55f.jpg',
      'https://i.imgur.com/EQOmXwd.jpg',
      'https://i.imgur.com/sjiXADj.jpg',
      'https://i.imgur.com/lJkgPEC.jpg',
      'https://i.imgur.com/ovUySbJ.jpg',
      'https://i.imgur.com/qsmajuf.jpg',
      'https://i.imgur.com/H60RGL8.jpg',
      'https://i.imgur.com/vfe3qH2.jpg',
      'https://i.imgur.com/TaIOXvx.jpg',
      'https://i.imgur.com/tipUMcM.jpg',
      'https://i.imgur.com/cQpwNS0.jpg',
      'https://i.imgur.com/LSNeufb.jpg',
      'https://i.imgur.com/2iDR0XY.jpg',
      'https://i.imgur.com/WfDbOxy.jpg',
      'https://i.imgur.com/5AyMYKd.jpg',
      'https://i.imgur.com/MM5MzTc.jpg',
      'https://i.imgur.com/idJ8wEh.jpg',
      'https://i.imgur.com/omkTfcT.jpg',
      'https://i.imgur.com/SM26PQP.jpg',
      'https://i.imgur.com/f12VoHr.jpg',
      'https://i.imgur.com/I3FuQCY.jpg',
      'https://i.imgur.com/gs1XCQC.jpg',
      'https://i.imgur.com/Aei9qCC.jpg',
      'https://i.imgur.com/Tm0TZSf.jpg',
      'https://i.imgur.com/mYRQ0is.jpg',
      'https://i.imgur.com/3LtUioi.jpg',
      'https://i.imgur.com/6X9xWpz.jpg',
      'https://i.imgur.com/oVu2OtN.jpg',
      'https://i.imgur.com/VCXkxu1.jpg',
      'https://i.imgur.com/Njvmed1.jpg',
      'https://i.imgur.com/dpcGcDk.jpg',
      'https://i.imgur.com/jLkn23w.jpg',
      'https://i.imgur.com/Ism0xKo.jpg',
      'https://i.imgur.com/LK6kKvM.jpg',
      'https://i.imgur.com/1SghLiJ.jpg',
      'https://i.imgur.com/WE5I4w1.jpg',
      'https://i.imgur.com/mnBL8J8.jpg',
      'https://i.imgur.com/4e9n1X0.jpg',
      'https://i.imgur.com/13rLtRs.jpg',
      'https://i.imgur.com/iSyK2eD.jpg',
      'https://i.imgur.com/KsbdifR.jpg',
      'https://i.imgur.com/o1zSxcP.jpg',
      'https://i.imgur.com/CQ1FkO2.jpg',
      'https://i.imgur.com/3XO9JM2.jpg',
      'https://i.imgur.com/OK6Wl3A.jpg',
      'https://i.imgur.com/m4Cbjfy.jpg',
      'https://i.imgur.com/Iy4t0oe.jpg',
      'https://i.imgur.com/JhS3lsr.jpg',
      'https://i.imgur.com/e5KWExe.jpg',
      'https://i.imgur.com/3kl2NTo.jpg',
      'https://i.imgur.com/KybEVk8.jpg',
      'https://i.imgur.com/CbjGxEB.jpg',
      'https://i.imgur.com/PsutHzH.jpg',
      'https://i.imgur.com/3IUyMpJ.jpg',
      'https://i.imgur.com/ANKbQOE.jpg',
      'https://i.imgur.com/gBbH8NW.jpg',
      'https://i.imgur.com/Gm9GP37.jpg',
      'https://i.imgur.com/NerLYuk.jpg',
      'https://i.imgur.com/cKAuzXo.jpg',
      'https://i.imgur.com/mYKJSYT.jpg',
      'https://i.imgur.com/7Z32G1N.jpg',
      'https://i.imgur.com/TKipuU3.jpg',
      'https://i.imgur.com/fFi0wxd.jpg',
      'https://i.imgur.com/t8xyXk7.jpg',
      'https://i.imgur.com/7hLgOY8.jpg',
      'https://i.imgur.com/Mx7E1rD.jpg',
      'https://i.imgur.com/Pg04QVZ.jpg',
      'https://i.imgur.com/rYMh2jd.jpg',
      'https://i.imgur.com/1o248IO.jpg',
      'https://i.imgur.com/3hTebvX.jpg',
      'https://i.imgur.com/irTRLwz.jpg',
      'https://i.imgur.com/1TEMyqV.jpg',
      'https://i.imgur.com/bzowqm0.jpg',
      'https://i.imgur.com/vxE6TN5.jpg',
      'https://i.imgur.com/cmhqDIi.jpg',
      'https://i.imgur.com/GCCh0mS.jpg',
      'https://i.imgur.com/ZZWPFe0.jpg',
      'https://i.imgur.com/pKnH56W.jpg',
      'https://i.imgur.com/Qqj9zTX.jpg',
      'https://i.imgur.com/zAbmBEQ.jpg',
      'https://i.imgur.com/1RLHhrt.jpg',
      'https://i.imgur.com/qOY6T4s.jpg',
      'https://i.imgur.com/qvpMqHt.jpg',
      'https://i.imgur.com/d6DTTuS.jpg',
      'https://i.imgur.com/r7n9kHH.jpg',
      'https://i.imgur.com/Lznznet.jpg',
      'https://i.imgur.com/VWY8rfZ.jpg',
      'https://i.imgur.com/s8ih3Rd.jpg',
      'https://i.imgur.com/g7ifuY2.jpg',
      'https://i.imgur.com/EXIuNDP.jpg',
      'https://i.imgur.com/8mAydNA.jpg',
      'https://i.imgur.com/lSuKlg1.jpg',
      'https://i.imgur.com/GqXMcvC.jpg',
      'https://i.imgur.com/wrCI4EY.jpg',
      'https://i.imgur.com/abd83Ta.jpg',
      'https://i.imgur.com/XqrQKOq.jpg',
      'https://i.imgur.com/3gOZ7hR.jpg',
      'https://i.imgur.com/eJCIAgC.jpg',
      'https://i.imgur.com/glGcG2K.jpg',
      'https://i.imgur.com/fcqIjy0.jpg',
      'https://i.imgur.com/Agif1G2.jpg',
      'https://i.imgur.com/3FNz5cV.jpg',
      'https://i.imgur.com/m88FLH5.jpg',
      'https://i.imgur.com/eF0htrd.jpg',
      'https://i.imgur.com/IqODtlp.jpg',
      'https://i.imgur.com/cI2TACI.jpg',
      'https://i.imgur.com/W5U3aM3.jpg',
      'https://i.imgur.com/ajnrXfy.jpg',
      'https://i.imgur.com/9oVjg4U.jpg',
      'https://i.imgur.com/g222Mxa.jpg',
      'https://i.imgur.com/OKkoy66.jpg',
      'https://i.imgur.com/l6AgSCB.jpg',
      'https://i.imgur.com/rLEDs79.jpg',
      'https://i.imgur.com/cnlmfTh.jpg',
      'https://i.imgur.com/cmUpZqQ.jpg',
      'https://i.imgur.com/rwSAvv0.jpg',
      'https://i.imgur.com/FJLZpv4.jpg',
      'https://i.imgur.com/OStbNIZ.jpg',
      'https://i.imgur.com/Xwb6p7d.jpg',
      'https://i.imgur.com/PxO39Xg.jpg',
      'https://i.imgur.com/bpv6mIv.jpg',
      'https://i.imgur.com/Ib0lnAO.jpg',
      'https://i.imgur.com/Vf8yoPa.jpg',
      'https://i.imgur.com/EAulm2T.jpg',
      'https://i.imgur.com/6Su13DN.jpg',
      'https://i.imgur.com/UxM6XUO.jpg',
      'https://i.imgur.com/a2zfZXW.jpg',
      'https://i.imgur.com/MpD1D05.jpg',
      'https://i.imgur.com/ZRqPJvh.jpg',
      'https://i.imgur.com/9UsXGqK.jpg',
      'https://i.imgur.com/6xfhopB.jpg',
      'https://i.imgur.com/RLRpZKA.jpg',
      'https://i.imgur.com/DjSVJaR.jpg',
      'https://i.imgur.com/8yAsD1J.jpg',
      'https://i.imgur.com/d6RFoby.jpg',
      'https://i.imgur.com/o2NZRe7.jpg',
      'https://i.imgur.com/6nod7rE.jpg',
      'https://i.imgur.com/NTDn7r7.jpg',
      'https://i.imgur.com/f9LRTrS.jpg',
      'https://i.imgur.com/N8J5OD6.jpg',
      'https://i.imgur.com/tfvTDU4.jpg',
      'https://i.imgur.com/SyTHzpt.jpg',
      'https://i.imgur.com/ErNbPpX.jpg',
      'https://i.imgur.com/DzNEMZB.jpg',
      'https://i.imgur.com/UKeQOPB.jpg',
      'https://i.imgur.com/q4qD5yo.jpg',
      'https://i.imgur.com/EKyyrpp.jpg',
      'https://i.imgur.com/kUuGpCg.jpg',
      'https://i.imgur.com/c5nLl4s.jpg',
      'https://i.imgur.com/SgAAp6A.jpg',
      'https://i.imgur.com/KLrOFDr.jpg',
      'https://i.imgur.com/VQM6cM4.jpg',
      'https://i.imgur.com/K6B8eaI.jpg',
      'https://i.imgur.com/VYx9EhV.jpg',
      'https://i.imgur.com/gRLXR3w.jpg',
      'https://i.imgur.com/8MtRTpg.jpg',
      'https://i.imgur.com/OqAALbj.jpg',
      'https://i.imgur.com/zzP87vZ.jpg',
      'https://i.imgur.com/thH0MZG.jpg',
      'https://i.imgur.com/jL82BQi.jpg',
      'https://i.imgur.com/xCzHKOS.jpg',
      'https://i.imgur.com/YRO0vVH.jpg',
      'https://i.imgur.com/02wHmCd.jpg',
      'https://i.imgur.com/EnC60aE.jpg',
      'https://i.imgur.com/vvSAaAD.jpg',
      'https://i.imgur.com/q3KWdrG.jpg',
      'https://i.imgur.com/Rq9Hh3k.jpg',
      'https://i.imgur.com/tlUqHYN.jpg',
      'https://i.imgur.com/NWOghiC.jpg',
      'https://i.imgur.com/vp5m3yt.jpg',
      'https://i.imgur.com/xalhMyH.jpg',
      'https://i.imgur.com/Rz82fiL.jpg',
      'https://i.imgur.com/VWgqKe7.jpg',
      'https://i.imgur.com/AYPykak.jpg',
      'https://i.imgur.com/Qnh2OYS.jpg',
      'https://i.imgur.com/bd0ZNmV.jpg',
      'https://i.imgur.com/xCwF9Xm.jpg',
      'https://i.imgur.com/pIKhat8.jpg',
      'https://i.imgur.com/YGsW18u.jpg',
      'https://i.imgur.com/CLyq1HM.jpg',
      'https://i.imgur.com/GVVEpjF.jpg',
      'https://i.imgur.com/uWDtxIA.jpg',
      'https://i.imgur.com/esAlCAq.jpg',
      'https://i.imgur.com/4y2vQzy.jpg',
      'https://i.imgur.com/KEBGvRo.jpg',
      'https://i.imgur.com/hnBgdYS.jpg',
      'https://i.imgur.com/qJxzPRy.jpg',
      'https://i.imgur.com/knZLnxg.jpg',
      'https://i.imgur.com/nbqHcHx.jpg',
      'https://i.imgur.com/T46snfU.jpg',
      'https://i.imgur.com/eYiAwSz.jpg',
      'https://i.imgur.com/nNLeUO8.jpg',
      'https://i.imgur.com/rZEG2Ru.jpg',
      'https://i.imgur.com/pQOG5dd.jpg',
      'https://i.imgur.com/9R1D2t4.jpg',
      'https://i.imgur.com/pqTIKhB.jpg',
      'https://i.imgur.com/ZPztDy6.jpg',
    ],
    "malarum-vannangal-2017": [
      'https://i.imgur.com/hVUWtdr.jpg',
      'https://i.imgur.com/ZC04cIc.jpg',
      'https://i.imgur.com/OmO1Khq.jpg',
      'https://i.imgur.com/IaRyhlW.jpg',
      'https://i.imgur.com/8qQTevW.jpg',
      'https://i.imgur.com/Z4vpF8L.jpg',
      'https://i.imgur.com/23qzSbI.jpg',
      'https://i.imgur.com/K7ffwMg.jpg',
      'https://i.imgur.com/vtyd2ra.jpg',
      'https://i.imgur.com/9aqjSou.jpg',
      'https://i.imgur.com/5moJonR.jpg',
      'https://i.imgur.com/K5vF4qf.jpg',
      'https://i.imgur.com/WGcLzTr.jpg',
      'https://i.imgur.com/dd8hQ7J.jpg',
      'https://i.imgur.com/Bfc5DuV.jpg',
      'https://i.imgur.com/tCXZrFK.jpg',
      'https://i.imgur.com/35JxTn7.jpg',
      'https://i.imgur.com/fH07aDD.jpg',
      'https://i.imgur.com/xgjGVZY.jpg',
      'https://i.imgur.com/W4BTZqB.jpg',
      'https://i.imgur.com/BCiQrb1.jpg',
      'https://i.imgur.com/zTdfQq3.jpg',
      'https://i.imgur.com/VbsDDwy.jpg',
      'https://i.imgur.com/UTUlvs6.jpg',
    ],
    'malarum-vannangal-2018': [
      'https://i.imgur.com/7Ku5S0K.jpg',
      'https://i.imgur.com/3wZ1GUj.jpg',
      'https://i.imgur.com/bkKPzET.jpg',
      'https://i.imgur.com/QDU1cAb.jpg',
      'https://i.imgur.com/Sy7pbwN.jpg',
      'https://i.imgur.com/M4ewoeW.jpg',
      'https://i.imgur.com/DfCRfRV.jpg',
      'https://i.imgur.com/zRzXMjy.jpg',
      'https://i.imgur.com/iDk6Ub0.jpg',
      'https://i.imgur.com/4bXXtvm.jpg',
      'https://i.imgur.com/RSmJcc2.jpg',
      'https://i.imgur.com/Hrd8BcE.jpg',
      'https://i.imgur.com/09FbieY.jpg',
    ],
    "malarum-vannangal-2019": [
      'https://i.imgur.com/gOL8YFP.jpg',
      'https://i.imgur.com/MzM68Ao.jpg',
      'https://i.imgur.com/RridgMb.jpg',
      'https://i.imgur.com/qCIuKMB.jpg',
      'https://i.imgur.com/HjUClvz.jpg',
      'https://i.imgur.com/hnWiheR.jpg',
      'https://i.imgur.com/bb04oya.jpg',
      'https://i.imgur.com/oi30LZn.jpg',
      'https://i.imgur.com/7AMZ9LN.jpg',
      'https://i.imgur.com/7THSVc6.jpg',
      'https://i.imgur.com/xcf6h4I.jpg',
      'https://i.imgur.com/IYz8Oul.jpg',
      'https://i.imgur.com/ZymThNl.jpg',
      'https://i.imgur.com/bctUPjw.jpg',
      'https://i.imgur.com/3qJ27CR.jpg',
      'https://i.imgur.com/RNzYWxv.jpg',
      'https://i.imgur.com/crMfmfR.jpg',
      'https://i.imgur.com/bsP62Yu.jpg',
      'https://i.imgur.com/SzK0ncn.jpg',
      'https://i.imgur.com/LVFvlUf.jpg',
      'https://i.imgur.com/Fxi5bi1.jpg',
      'https://i.imgur.com/olgMyTx.jpg',
      'https://i.imgur.com/mr08wI2.jpg',
      'https://i.imgur.com/YtAAlDZ.jpg',
      'https://i.imgur.com/ei6oofl.jpg',
      'https://i.imgur.com/DWnU4fB.jpg',
      'https://i.imgur.com/fQuyhzq.jpg',
      'https://i.imgur.com/1mub7sT.jpg',
      'https://i.imgur.com/gXibcN9.jpg',
      'https://i.imgur.com/ItOmzKV.jpg',
      'https://i.imgur.com/kYN99ny.jpg',
      'https://i.imgur.com/mcWKOlT.jpg',
      'https://i.imgur.com/YCSQKpz.jpg',
      'https://i.imgur.com/vBg8hce.jpg',
      'https://i.imgur.com/0CVVS5C.jpg',
      'https://i.imgur.com/PdWoOdV.jpg',
      'https://i.imgur.com/pLgvN5a.jpg',
      'https://i.imgur.com/dHfPLZr.jpg',
      'https://i.imgur.com/XlX3kjf.jpg',
      'https://i.imgur.com/OIb1Zu9.jpg',
      'https://i.imgur.com/rAnlNjH.jpg',
      'https://i.imgur.com/NTDXO94.jpg',
      'https://i.imgur.com/JwcpCTi.jpg',
      'https://i.imgur.com/8JYZATd.jpg',
      'https://i.imgur.com/yu1wcn9.jpg',
      'https://i.imgur.com/Co9BOrw.jpg',
      'https://i.imgur.com/RzBtnz1.jpg',
      'https://i.imgur.com/qRyNtLp.jpg',
      'https://i.imgur.com/tlcA1P6.jpg',
      'https://i.imgur.com/Uvujgni.jpg',
      'https://i.imgur.com/GogaEcA.jpg',
      'https://i.imgur.com/6YPHbDz.jpg',
      'https://i.imgur.com/xwDZ0SX.jpg',
      'https://i.imgur.com/IEXsCYd.jpg',
      'https://i.imgur.com/iGSHh92.jpg',
      'https://i.imgur.com/mpBax8K.jpg',
      'https://i.imgur.com/RXebGkJ.jpg',
      'https://i.imgur.com/uRONumy.jpg',
      'https://i.imgur.com/GgMn9I8.jpg',
      'https://i.imgur.com/vJTe0eS.jpg',
      'https://i.imgur.com/zqKhu2W.jpg',
      'https://i.imgur.com/Ncwgahm.jpg',
      'https://i.imgur.com/AOGaLlV.jpg',
      'https://i.imgur.com/Al2I8CV.jpg',
      'https://i.imgur.com/kuW97cz.jpg',
      'https://i.imgur.com/PItaWSG.jpg',
      'https://i.imgur.com/ioNtP0S.jpg',
      'https://i.imgur.com/LRkIvT6.jpg',
      'https://i.imgur.com/EzBrh7i.jpg',
      'https://i.imgur.com/Q57FBBU.jpg',
      'https://i.imgur.com/g55kNlx.jpg',
      'https://i.imgur.com/FAV4eec.jpg',
      'https://i.imgur.com/s60w7qe.jpg',
      'https://i.imgur.com/Uq9CDY0.jpg',
      'https://i.imgur.com/BaGC55f.jpg',
      'https://i.imgur.com/EQOmXwd.jpg',
      'https://i.imgur.com/sjiXADj.jpg',
      'https://i.imgur.com/lJkgPEC.jpg',
      'https://i.imgur.com/ovUySbJ.jpg',
      'https://i.imgur.com/qsmajuf.jpg',
      'https://i.imgur.com/H60RGL8.jpg',
      'https://i.imgur.com/vfe3qH2.jpg',
      'https://i.imgur.com/TaIOXvx.jpg',
      'https://i.imgur.com/tipUMcM.jpg',
      'https://i.imgur.com/cQpwNS0.jpg',
      'https://i.imgur.com/LSNeufb.jpg',
      'https://i.imgur.com/2iDR0XY.jpg',
      'https://i.imgur.com/WfDbOxy.jpg',
      'https://i.imgur.com/5AyMYKd.jpg',
      'https://i.imgur.com/MM5MzTc.jpg',
      'https://i.imgur.com/idJ8wEh.jpg',
      'https://i.imgur.com/omkTfcT.jpg',
      'https://i.imgur.com/SM26PQP.jpg',
      'https://i.imgur.com/f12VoHr.jpg',
      'https://i.imgur.com/I3FuQCY.jpg',
      'https://i.imgur.com/gs1XCQC.jpg',
      'https://i.imgur.com/Aei9qCC.jpg',
      'https://i.imgur.com/Tm0TZSf.jpg',
      'https://i.imgur.com/mYRQ0is.jpg',
      'https://i.imgur.com/3LtUioi.jpg',
      'https://i.imgur.com/6X9xWpz.jpg',
      'https://i.imgur.com/oVu2OtN.jpg',
      'https://i.imgur.com/VCXkxu1.jpg',
      'https://i.imgur.com/Njvmed1.jpg',
      'https://i.imgur.com/dpcGcDk.jpg',
      'https://i.imgur.com/jLkn23w.jpg',
      'https://i.imgur.com/Ism0xKo.jpg',
      'https://i.imgur.com/LK6kKvM.jpg',
      'https://i.imgur.com/1SghLiJ.jpg',
      'https://i.imgur.com/WE5I4w1.jpg',
      'https://i.imgur.com/mnBL8J8.jpg',
      'https://i.imgur.com/4e9n1X0.jpg',
      'https://i.imgur.com/13rLtRs.jpg',
      'https://i.imgur.com/iSyK2eD.jpg',
      'https://i.imgur.com/KsbdifR.jpg',
      'https://i.imgur.com/o1zSxcP.jpg',
      'https://i.imgur.com/CQ1FkO2.jpg',
      'https://i.imgur.com/3XO9JM2.jpg',
      'https://i.imgur.com/OK6Wl3A.jpg',
      'https://i.imgur.com/m4Cbjfy.jpg',
      'https://i.imgur.com/Iy4t0oe.jpg',
      'https://i.imgur.com/JhS3lsr.jpg',
      'https://i.imgur.com/e5KWExe.jpg',
      'https://i.imgur.com/3kl2NTo.jpg',
      'https://i.imgur.com/KybEVk8.jpg',
      'https://i.imgur.com/CbjGxEB.jpg',
      'https://i.imgur.com/PsutHzH.jpg',
      'https://i.imgur.com/3IUyMpJ.jpg',
      'https://i.imgur.com/ANKbQOE.jpg',
      'https://i.imgur.com/gBbH8NW.jpg',
      'https://i.imgur.com/Gm9GP37.jpg',
      'https://i.imgur.com/NerLYuk.jpg',
      'https://i.imgur.com/cKAuzXo.jpg',
      'https://i.imgur.com/mYKJSYT.jpg',
      'https://i.imgur.com/7Z32G1N.jpg',
      'https://i.imgur.com/TKipuU3.jpg',
      'https://i.imgur.com/fFi0wxd.jpg',
      'https://i.imgur.com/t8xyXk7.jpg',
      'https://i.imgur.com/7hLgOY8.jpg',
      'https://i.imgur.com/Mx7E1rD.jpg',
      'https://i.imgur.com/Pg04QVZ.jpg',
      'https://i.imgur.com/rYMh2jd.jpg',
      'https://i.imgur.com/1o248IO.jpg',
      'https://i.imgur.com/3hTebvX.jpg',
      'https://i.imgur.com/irTRLwz.jpg',
      'https://i.imgur.com/1TEMyqV.jpg',
      'https://i.imgur.com/bzowqm0.jpg',
      'https://i.imgur.com/vxE6TN5.jpg',
      'https://i.imgur.com/cmhqDIi.jpg',
      'https://i.imgur.com/GCCh0mS.jpg',
      'https://i.imgur.com/ZZWPFe0.jpg',
      'https://i.imgur.com/pKnH56W.jpg',
      'https://i.imgur.com/Qqj9zTX.jpg',
      'https://i.imgur.com/zAbmBEQ.jpg',
      'https://i.imgur.com/1RLHhrt.jpg',
      'https://i.imgur.com/qOY6T4s.jpg',
      'https://i.imgur.com/qvpMqHt.jpg',
      'https://i.imgur.com/d6DTTuS.jpg',
      'https://i.imgur.com/r7n9kHH.jpg',
      'https://i.imgur.com/Lznznet.jpg',
      'https://i.imgur.com/VWY8rfZ.jpg',
      'https://i.imgur.com/s8ih3Rd.jpg',
      'https://i.imgur.com/g7ifuY2.jpg',
      'https://i.imgur.com/EXIuNDP.jpg',
      'https://i.imgur.com/8mAydNA.jpg',
      'https://i.imgur.com/lSuKlg1.jpg',
      'https://i.imgur.com/GqXMcvC.jpg',
      'https://i.imgur.com/wrCI4EY.jpg',
      'https://i.imgur.com/abd83Ta.jpg',
      'https://i.imgur.com/XqrQKOq.jpg',
      'https://i.imgur.com/3gOZ7hR.jpg',
      'https://i.imgur.com/eJCIAgC.jpg',
      'https://i.imgur.com/glGcG2K.jpg',
      'https://i.imgur.com/fcqIjy0.jpg',
      'https://i.imgur.com/Agif1G2.jpg',
      'https://i.imgur.com/3FNz5cV.jpg',
      'https://i.imgur.com/m88FLH5.jpg',
      'https://i.imgur.com/eF0htrd.jpg',
      'https://i.imgur.com/IqODtlp.jpg',
      'https://i.imgur.com/cI2TACI.jpg',
      'https://i.imgur.com/W5U3aM3.jpg',
      'https://i.imgur.com/ajnrXfy.jpg',
      'https://i.imgur.com/9oVjg4U.jpg',
      'https://i.imgur.com/g222Mxa.jpg',
      'https://i.imgur.com/OKkoy66.jpg',
      'https://i.imgur.com/l6AgSCB.jpg',
      'https://i.imgur.com/rLEDs79.jpg',
      'https://i.imgur.com/cnlmfTh.jpg',
      'https://i.imgur.com/cmUpZqQ.jpg',
      'https://i.imgur.com/rwSAvv0.jpg',
      'https://i.imgur.com/FJLZpv4.jpg',
      'https://i.imgur.com/OStbNIZ.jpg',
      'https://i.imgur.com/Xwb6p7d.jpg',
      'https://i.imgur.com/PxO39Xg.jpg',
      'https://i.imgur.com/bpv6mIv.jpg',
      'https://i.imgur.com/Ib0lnAO.jpg',
      'https://i.imgur.com/Vf8yoPa.jpg',
      'https://i.imgur.com/EAulm2T.jpg',
      'https://i.imgur.com/6Su13DN.jpg',
      'https://i.imgur.com/UxM6XUO.jpg',
      'https://i.imgur.com/a2zfZXW.jpg',
      'https://i.imgur.com/MpD1D05.jpg',
      'https://i.imgur.com/ZRqPJvh.jpg',
      'https://i.imgur.com/9UsXGqK.jpg',
      'https://i.imgur.com/6xfhopB.jpg',
      'https://i.imgur.com/RLRpZKA.jpg',
      'https://i.imgur.com/DjSVJaR.jpg',
      'https://i.imgur.com/8yAsD1J.jpg',
      'https://i.imgur.com/d6RFoby.jpg',
      'https://i.imgur.com/o2NZRe7.jpg',
      'https://i.imgur.com/6nod7rE.jpg',
      'https://i.imgur.com/NTDn7r7.jpg',
      'https://i.imgur.com/f9LRTrS.jpg',
      'https://i.imgur.com/N8J5OD6.jpg',
      'https://i.imgur.com/tfvTDU4.jpg',
      'https://i.imgur.com/SyTHzpt.jpg',
      'https://i.imgur.com/ErNbPpX.jpg',
      'https://i.imgur.com/DzNEMZB.jpg',
      'https://i.imgur.com/UKeQOPB.jpg',
      'https://i.imgur.com/q4qD5yo.jpg',
      'https://i.imgur.com/EKyyrpp.jpg',
      'https://i.imgur.com/kUuGpCg.jpg',
      'https://i.imgur.com/c5nLl4s.jpg',
      'https://i.imgur.com/SgAAp6A.jpg',
      'https://i.imgur.com/KLrOFDr.jpg',
      'https://i.imgur.com/VQM6cM4.jpg',
      'https://i.imgur.com/K6B8eaI.jpg',
      'https://i.imgur.com/VYx9EhV.jpg',
      'https://i.imgur.com/gRLXR3w.jpg',
      'https://i.imgur.com/8MtRTpg.jpg',
      'https://i.imgur.com/OqAALbj.jpg',
      'https://i.imgur.com/zzP87vZ.jpg',
      'https://i.imgur.com/thH0MZG.jpg',
      'https://i.imgur.com/jL82BQi.jpg',
      'https://i.imgur.com/xCzHKOS.jpg',
      'https://i.imgur.com/YRO0vVH.jpg',
      'https://i.imgur.com/02wHmCd.jpg',
      'https://i.imgur.com/EnC60aE.jpg',
      'https://i.imgur.com/vvSAaAD.jpg',
      'https://i.imgur.com/q3KWdrG.jpg',
      'https://i.imgur.com/Rq9Hh3k.jpg',
      'https://i.imgur.com/tlUqHYN.jpg',
      'https://i.imgur.com/NWOghiC.jpg',
      'https://i.imgur.com/vp5m3yt.jpg',
      'https://i.imgur.com/xalhMyH.jpg',
      'https://i.imgur.com/Rz82fiL.jpg',
      'https://i.imgur.com/VWgqKe7.jpg',
      'https://i.imgur.com/AYPykak.jpg',
      'https://i.imgur.com/Qnh2OYS.jpg',
      'https://i.imgur.com/bd0ZNmV.jpg',
      'https://i.imgur.com/xCwF9Xm.jpg',
      'https://i.imgur.com/pIKhat8.jpg',
      'https://i.imgur.com/YGsW18u.jpg',
      'https://i.imgur.com/CLyq1HM.jpg',
      'https://i.imgur.com/GVVEpjF.jpg',
      'https://i.imgur.com/uWDtxIA.jpg',
      'https://i.imgur.com/esAlCAq.jpg',
      'https://i.imgur.com/4y2vQzy.jpg',
      'https://i.imgur.com/KEBGvRo.jpg',
      'https://i.imgur.com/hnBgdYS.jpg',
      'https://i.imgur.com/qJxzPRy.jpg',
      'https://i.imgur.com/knZLnxg.jpg',
      'https://i.imgur.com/nbqHcHx.jpg',
      'https://i.imgur.com/T46snfU.jpg',
      'https://i.imgur.com/eYiAwSz.jpg',
      'https://i.imgur.com/nNLeUO8.jpg',
      'https://i.imgur.com/rZEG2Ru.jpg',
      'https://i.imgur.com/pQOG5dd.jpg',
      'https://i.imgur.com/9R1D2t4.jpg',
      'https://i.imgur.com/pqTIKhB.jpg',
      'https://i.imgur.com/ZPztDy6.jpg',
    ]
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.option = params.get('option')
      if (Object.keys(this.images).indexOf(this.option) !== -1) {
        this.initImages(this.option)
        $('#catChoose').val(this.option)
      } else {
        window.location.href = '/gallery/all'
      }
    })
  }

  initImages(opt) {
    this.shuffle(this.images[opt])
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onEventSelected(event) {
    window.location.href = 'gallery/' + event
  }
}

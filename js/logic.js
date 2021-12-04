function calculate(){
    var svc=$("#svc").val();
    
    svc=svc/100;
    var ivc=$("#ivc").val();
    ivc=ivc/100;
    var mv=((3/4)*svc) + ((1/4)*ivc);
    mv=roundToTwo(mv);
    console.log("MV : "+mv)
    $("#mvout").text(mv);
    
    var hemoglobin=$("#hemoglobin").val();
    var saturation=$("#saturation").val();
    saturation=saturation/100;
    var content=(1.36*hemoglobin*10*saturation);
    content=roundToTwo(content);
    console.log("O2 Content : "+content);
    $("#contentout").text(content);
    
    //debugger;
    var p02=$("#po2").val();
    var content2=content+(0.03*p02);
    content2=roundToTwo(content2);
    console.log("O2 Content 2 : "+content2);
    $("#content2out").text(content2);

    
    var height=$("#height").val();
    var weight=$("#weight").val();
    var pa=$("#pa").val();
    pa=pa/100;
    var pv=$("#pv").val();
    pv=pv/100;
    var bsa=((weight*height)/3600);
    bsa=Math.sqrt(bsa);
    bsa=roundToTwo(bsa);
    console.log("bsa : "+bsa);
    $("#bsameasure").text(isNaN(bsa)?0:bsa);
    
    
    var xbar=(125*bsa)/(1.36*hemoglobin*10);
    var qp=(xbar*(1/(pv-pa)));
    qp=roundToTwo(qp);
    xbar=roundToTwo(xbar);
    console.log("QP : "+qp);
    $("#qpmeasure").text(isNaN(qp)?0:qp);
    $("#xbarmeasure").text(isNaN(xbar)?0:xbar);

    var qp_post=(125*bsa)/(content2*(pv-pa));
    $("#qppostmeasure").text(isNaN(qp_post)?0:qp_post);
    //debugger;
    
    var ao=$("#ao").val();
    ao=ao/100;
    var qs=(xbar*(1/(ao-mv)));
    qs=roundToTwo(qs);
    console.log("QS : "+qs);
    $("#qsmeasure").text(isNaN(qs)?0:qs);

    var qs_post=(125*bsa)/(content2*(ao-mv));
    $("#qspostmeasure").text(isNaN(qs_post)?0:qs_posts);

    var qeff=(xbar*(1/(pv-mv)));
    qeff=roundToTwo(qeff);
    console.log("Q Effective : "+qeff);
    $("#qeffmeasure").text(isNaN(qeff)?0:qeff);

    var qeff_post=(125*bsa)/(content2*(pv-mv));
    $("#qeffpostmeasure").text(isNaN(qeff_post)?0:qeff_post);
    
    //var pv2=$("#pv2").val();
    var pa2=$("#pa2").val();
    var ao2=$("#ao2").val();
    var la2=$("#la2").val();
    var ra2=$("#ra2").val();
    var pvr=((pa2-la2)/qp);
    
    pvr=roundToTwo(pvr);
    console.log(" PVR : "+pvr);
    $("#pvrmeasure").text(isNaN(pvr)?0:pvr);
    
    var svr=((ao2-ra2)/qp);
    svr=roundToTwo(svr);
    console.log(" SVR : "+svr);
    $("#svrmeasure").text(isNaN(svr)?0:svr);
    
    var pvrbysvr=(pvr/svr);
    pvrbysvr=roundToTwo(pvrbysvr);
    console.log(" pvrbysvr : "+pvrbysvr);
    $("#pvrbysvrmeasure").text(isNaN(pvrbysvr)?0:pvrbysvr);
    
    
    
    var pvri=(pvr*bsa);
    pvri=roundToTwo(pvri);
    console.log(" PVRi : "+pvri);
    $("#pvrimeasure").text(isNaN(pvri)?0:pvri);
    
    
    var svri=(svr*bsa);
    svri=roundToTwo(svri);
    console.log(" SVRi : "+svri);
    $("#svrimeasure").text(isNaN(svri)?0:svri);
    
    
    var rpa=$("#rpa").val();
    rpa=rpa/100;
    var lpa=$("#lpa").val();
    lpa=lpa/100;
    var dta=$("#dta").val();
    
    var mg=((rpa+lpa)/dta);
    mg=roundToTwo(mg);
    console.log("mg : "+mg);
    $("#mgmeasure").text(isNaN(mg)?0:mg);
    
    var rrpa=$("#radiousrpa").val();
    var rlpa=$("#radiouslpa").val();
    
    var ni=(((3.14*rrpa*rrpa/4)+(3.14*rlpa*rlpa/4))/bsa);
    ni=roundToTwo(ni);
    console.log("ni : "+ni);
    $("#nimeasure").text(isNaN(ni)?0:ni);
    
    var co=((125*bsa)/(1.36*10*hemoglobin*(ao-pa)));
    var coindex=co/bsa;
    co=roundToTwo(co);
    coindex=roundToTwo(coindex);
    console.log("co : "+co);
    console.log("co index : "+coindex);
    $("#comeasure").text(isNaN(co)?0:co);
    $("#comeasureindex").text(isNaN(coindex)?0:coindex);
    
    
    var mean=$("#meangradient").val();
    var dfp=$("#dfp").val();
    mean=Math.sqrt(mean);
    mean=roundToTwo(mean);
    var mva=(((co*1000)/(dfp))/(38*mean));
    mva=roundToTwo(mva);
    $("#mvameasureindex").text(isNaN(mva)?0:mva);
    
    
    var qsbdg=((xbar*(pv-ivc))/((pv-pa)*(ao-ivc)));
    qsbdg=roundToTwo(qsbdg);
    $("#qsbdgmeasureindex").text(isNaN(qsbdg)?0:qsbdg);

    var bdg=$("#bdg").val();
    
    var qpbdg=(xbar/(pv-(svc/bdg)));
    qpbdg=roundToTwo(qpbdg);
    $("#qpbdgmeasureindex").text(isNaN(qpbdg)?0:qpbdg);

    var qpbyqs=qpbdg/qsbdg;
    qpbyqs=roundToTwo(qpbyqs);
    $("#qpbyqs").text(isNaN(qpbyqs)?0:qpbyqs);


    $('#datamodal').modal('toggle');
    
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

import { Card, CardContent } from "@/components/ui/card";

const OfficialCard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white shadow-elegant border-0">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Official Image */}
              <div className="flex-shrink-0">
                <div className="w-64 h-80 bg-gradient-to-b from-saffron/20 to-gold/20 rounded-lg overflow-hidden border-4 border-saffron/30">
                  <div className="w-full h-full bg-gradient-to-b from-saffron/10 to-gold/10 flex items-center justify-center">
                    <div className="text-center text-navy/60">
                      <div className="text-lg font-semibold mb-2">श्रीमती मनीषा खत्री</div>
                      <div className="text-sm">आयुक्त एवं प्रशासक</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="text-base leading-relaxed text-navy">
                  नासिक महानगरपालिका (एनएमसी) ही महाराष्ट्रातील नासिक शहराच्या प्रशासन आणि 
                  विकासासाठी जबाबदार असलेली प्रशासकीय संस्था आहे. ७ नोव्हेंबर १९८२ मध्ये स्थापन झालेली 
                  ही संस्था शहरी नियोजन, सार्वजनिक सेवा आणि पायाभूत सुविधा व्यवस्थापनाचे निर्देशन करते.
                </div>
                
                <div className="text-base leading-relaxed text-navy">
                  ही संस्था पाणीपुरवठा, कचरा व्यवस्थापन, आरोग्यसेवा आणि रस्ते देखभाल यासारख्या आवश्यक 
                  सेवा सुनिश्चित करण्यासाठी एनएमसीचे नेतृत्व एका निवडून आलेल्या महापौर करतात आणि राज्य 
                  सरकारने नियुक्त केलेले महानगरपालिका आयुक्त दैनंदिन कामकाज हाताळतात.
                </div>

                <div className="text-base leading-relaxed text-navy">
                  धार्मिक अमलात आणणे, विकास प्रकल्पांचे व्यवस्थापन करणे आणि शहरातील सेवांचे सुव्यवस्थित 
                  कामकाज सुनिश्चित करण्यासाठी एनएमसी महत्वाची भूमिका बजावते.
                </div>

                <div className="border-t pt-4">
                  <div className="text-primary font-semibold text-lg">श्रीमती मनीषा खत्री, आय.ए.एस.</div>
                  <div className="text-navy/70">आयुक्त एवं प्रशासक</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OfficialCard;
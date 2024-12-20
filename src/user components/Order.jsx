import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const data = [{"Product_Name":"pharetra magna ac","Date_and_Time_of_Sales":"5/7/2024","Order_Value":"Euro","Commission":"$8.96","Revenue":"€1000,00","City":"Yläne","Country":"Finland"},
  {"Product_Name":"suscipit a feugiat et","Date_and_Time_of_Sales":"5/31/2024","Order_Value":"Krona","Commission":"$0.63","Revenue":"€1000,00","City":"Mullsjö","Country":"Sweden"},
  {"Product_Name":"id turpis","Date_and_Time_of_Sales":"2/12/2024","Order_Value":"Peso","Commission":"$4.76","Revenue":"€1000,00","City":"Lallayug","Country":"Philippines"},
  {"Product_Name":"pretium iaculis","Date_and_Time_of_Sales":"12/17/2023","Order_Value":"Yuan Renminbi","Commission":"$4.18","Revenue":"€1000,00","City":"Dachang","Country":"China"},
  {"Product_Name":"eget tempus","Date_and_Time_of_Sales":"3/31/2024","Order_Value":"Krona","Commission":"$8.89","Revenue":"€1000,00","City":"Hässelby","Country":"Sweden"},
  {"Product_Name":"potenti in eleifend quam","Date_and_Time_of_Sales":"2/21/2024","Order_Value":"Euro","Commission":"$9.48","Revenue":"€1000,00","City":"Martingança","Country":"Portugal"},
  {"Product_Name":"odio porttitor id consequat","Date_and_Time_of_Sales":"1/31/2024","Order_Value":"Ruble","Commission":"$5.69","Revenue":"€1000,00","City":"Mozdok","Country":"Russia"},
  {"Product_Name":"aenean auctor gravida sem","Date_and_Time_of_Sales":"3/9/2024","Order_Value":"Peso","Commission":"$8.58","Revenue":"€1000,00","City":"Allacapan","Country":"Philippines"},
  {"Product_Name":"mauris non ligula pellentesque","Date_and_Time_of_Sales":"9/3/2023","Order_Value":"Rupee","Commission":"$4.37","Revenue":"€1000,00","City":"Kandana","Country":"Sri Lanka"},
  {"Product_Name":"pharetra magna","Date_and_Time_of_Sales":"5/16/2024","Order_Value":"Pound","Commission":"$8.27","Revenue":"€1000,00","City":"Juhaynah","Country":"Egypt"},
  {"Product_Name":"orci luctus et ultrices","Date_and_Time_of_Sales":"9/29/2023","Order_Value":"Peso","Commission":"$0.70","Revenue":"€1000,00","City":"El Alamo","Country":"Mexico"},
  {"Product_Name":"sapien quis libero nullam sit","Date_and_Time_of_Sales":"4/24/2024","Order_Value":"Peso","Commission":"$5.15","Revenue":"€1000,00","City":"Ambulong","Country":"Philippines"},
  {"Product_Name":"ut suscipit a feugiat","Date_and_Time_of_Sales":"4/17/2024","Order_Value":"Hryvnia","Commission":"$4.13","Revenue":"€1000,00","City":"Krasne","Country":"Ukraine"},
  {"Product_Name":"non ligula pellentesque","Date_and_Time_of_Sales":"4/5/2024","Order_Value":"Quetzal","Commission":"$3.68","Revenue":"€1000,00","City":"San Marcos","Country":"Guatemala"},
  {"Product_Name":"nullam orci","Date_and_Time_of_Sales":"7/5/2024","Order_Value":"Rupiah","Commission":"$7.46","Revenue":"€1000,00","City":"Cakungsari","Country":"Indonesia"},
  {"Product_Name":"in sagittis dui","Date_and_Time_of_Sales":"10/9/2023","Order_Value":"Real","Commission":"$0.14","Revenue":"€1000,00","City":"Vigia","Country":"Brazil"},
  {"Product_Name":"sapien ut","Date_and_Time_of_Sales":"8/19/2024","Order_Value":"Krona","Commission":"$5.36","Revenue":"€1000,00","City":"Uppsala","Country":"Sweden"},
  {"Product_Name":"ultrices vel","Date_and_Time_of_Sales":"10/12/2023","Order_Value":"Peso","Commission":"$0.24","Revenue":"€1000,00","City":"Intendente Alvear","Country":"Argentina"},
  {"Product_Name":"nulla tellus in sagittis","Date_and_Time_of_Sales":"11/29/2023","Order_Value":"Dinar","Commission":"$2.43","Revenue":"€1000,00","City":"Janūb as Surrah","Country":"Kuwait"},
  {"Product_Name":"mauris ullamcorper purus","Date_and_Time_of_Sales":"4/4/2024","Order_Value":"Peso","Commission":"$6.11","Revenue":"€1000,00","City":"Curry","Country":"Philippines"},
  {"Product_Name":"aliquam quis turpis eget","Date_and_Time_of_Sales":"11/3/2023","Order_Value":"Yuan Renminbi","Commission":"$2.18","Revenue":"€1000,00","City":"Danan","Country":"China"},
  {"Product_Name":"vestibulum proin eu mi","Date_and_Time_of_Sales":"10/19/2023","Order_Value":"Yuan Renminbi","Commission":"$9.66","Revenue":"€1000,00","City":"Xinqiao","Country":"China"},
  {"Product_Name":"vel sem sed sagittis nam","Date_and_Time_of_Sales":"1/10/2024","Order_Value":"Real","Commission":"$7.21","Revenue":"€1000,00","City":"Osvaldo Cruz","Country":"Brazil"},
  {"Product_Name":"at diam","Date_and_Time_of_Sales":"8/2/2024","Order_Value":"Rupiah","Commission":"$3.99","Revenue":"€1000,00","City":"Sawo","Country":"Indonesia"},
  {"Product_Name":"quam turpis adipiscing lorem vitae","Date_and_Time_of_Sales":"10/22/2023","Order_Value":"Rupiah","Commission":"$0.60","Revenue":"€1000,00","City":"Laironja","Country":"Indonesia"},
  {"Product_Name":"donec posuere metus vitae","Date_and_Time_of_Sales":"11/23/2023","Order_Value":"Ruble","Commission":"$6.01","Revenue":"€1000,00","City":"Sovetskiy","Country":"Russia"},
  {"Product_Name":"interdum venenatis turpis enim","Date_and_Time_of_Sales":"3/22/2024","Order_Value":"Yuan Renminbi","Commission":"$7.26","Revenue":"€1000,00","City":"Bai’e","Country":"China"},
  {"Product_Name":"vestibulum aliquet ultrices erat tortor","Date_and_Time_of_Sales":"6/24/2024","Order_Value":"Euro","Commission":"$1.64","Revenue":"€1000,00","City":"Dragomer","Country":"Slovenia"},
  {"Product_Name":"tristique in tempus sit amet","Date_and_Time_of_Sales":"5/4/2024","Order_Value":"Krona","Commission":"$6.23","Revenue":"€1000,00","City":"Visby","Country":"Sweden"},
  {"Product_Name":"curae nulla dapibus dolor","Date_and_Time_of_Sales":"5/11/2024","Order_Value":"Euro","Commission":"$0.42","Revenue":"€1000,00","City":"Lluka e Eperme","Country":"Kosovo"},
  {"Product_Name":"magna bibendum imperdiet","Date_and_Time_of_Sales":"5/13/2024","Order_Value":"Dollar","Commission":"$7.00","Revenue":"€1000,00","City":"Coquitlam","Country":"Canada"},
  {"Product_Name":"nulla dapibus dolor vel est","Date_and_Time_of_Sales":"8/14/2024","Order_Value":"Ruble","Commission":"$9.32","Revenue":"€1000,00","City":"Srostki","Country":"Russia"},
  {"Product_Name":"sapien non","Date_and_Time_of_Sales":"6/30/2024","Order_Value":"Peso","Commission":"$3.21","Revenue":"€1000,00","City":"Maramag","Country":"Philippines"},
  {"Product_Name":"non mauris morbi non","Date_and_Time_of_Sales":"2/9/2024","Order_Value":"Real","Commission":"$8.66","Revenue":"€1000,00","City":"São Gonçalo do Sapucaí","Country":"Brazil"},
  {"Product_Name":"sit amet","Date_and_Time_of_Sales":"9/4/2023","Order_Value":"Euro","Commission":"$5.15","Revenue":"€1000,00","City":"Saint-Pierre-des-Corps","Country":"France"},
  {"Product_Name":"accumsan odio curabitur convallis duis","Date_and_Time_of_Sales":"12/15/2023","Order_Value":"Hryvnia","Commission":"$1.99","Revenue":"€1000,00","City":"Krynychky","Country":"Ukraine"},
  {"Product_Name":"amet eros suspendisse accumsan","Date_and_Time_of_Sales":"10/11/2023","Order_Value":"Dollar","Commission":"$1.10","Revenue":"€1000,00","City":"Kingsport","Country":"United States"},
  {"Product_Name":"at turpis a","Date_and_Time_of_Sales":"1/25/2024","Order_Value":"Sol","Commission":"$2.38","Revenue":"€1000,00","City":"Chiclayo","Country":"Peru"},
  {"Product_Name":"non mauris","Date_and_Time_of_Sales":"1/20/2024","Order_Value":"Dinar","Commission":"$3.74","Revenue":"€1000,00","City":"Jendouba","Country":"Tunisia"},
  {"Product_Name":"vestibulum rutrum","Date_and_Time_of_Sales":"11/13/2023","Order_Value":"Euro","Commission":"$9.77","Revenue":"€1000,00","City":"Roscoff","Country":"France"},
  {"Product_Name":"porttitor id consequat in consequat","Date_and_Time_of_Sales":"3/9/2024","Order_Value":"Peso","Commission":"$8.04","Revenue":"€1000,00","City":"Mayorga","Country":"Philippines"},
  {"Product_Name":"nulla suspendisse potenti","Date_and_Time_of_Sales":"2/2/2024","Order_Value":"Euro","Commission":"$5.63","Revenue":"€1000,00","City":"Koutsopódi","Country":"Greece"},
  {"Product_Name":"libero ut massa","Date_and_Time_of_Sales":"3/4/2024","Order_Value":"Peso","Commission":"$4.28","Revenue":"€1000,00","City":"Molagavita","Country":"Colombia"},
  {"Product_Name":"sit amet lobortis sapien","Date_and_Time_of_Sales":"8/24/2024","Order_Value":"Yuan Renminbi","Commission":"$5.41","Revenue":"€1000,00","City":"Xingxi","Country":"China"},
  {"Product_Name":"diam id","Date_and_Time_of_Sales":"5/17/2024","Order_Value":"Yuan Renminbi","Commission":"$1.30","Revenue":"€1000,00","City":"Xuebu","Country":"China"},
  {"Product_Name":"primis in faucibus orci luctus","Date_and_Time_of_Sales":"11/1/2023","Order_Value":"Zloty","Commission":"$1.61","Revenue":"€1000,00","City":"Ostroróg","Country":"Poland"},
  {"Product_Name":"lacinia aenean sit amet","Date_and_Time_of_Sales":"11/14/2023","Order_Value":"Yuan Renminbi","Commission":"$4.97","Revenue":"€1000,00","City":"Huangdao","Country":"China"},
  {"Product_Name":"ut nunc","Date_and_Time_of_Sales":"3/5/2024","Order_Value":"Zloty","Commission":"$8.58","Revenue":"€1000,00","City":"Łącko","Country":"Poland"},
  {"Product_Name":"erat id","Date_and_Time_of_Sales":"3/24/2024","Order_Value":"Euro","Commission":"$3.54","Revenue":"€1000,00","City":"Saronída","Country":"Greece"},
  {"Product_Name":"id turpis","Date_and_Time_of_Sales":"10/5/2023","Order_Value":"Yuan Renminbi","Commission":"$0.65","Revenue":"€1000,00","City":"Shigu","Country":"China"},
  {"Product_Name":"massa id","Date_and_Time_of_Sales":"4/20/2024","Order_Value":"Rupiah","Commission":"$8.07","Revenue":"€1000,00","City":"Banjar Banyualit","Country":"Indonesia"},
  {"Product_Name":"at velit eu","Date_and_Time_of_Sales":"3/3/2024","Order_Value":"Ruble","Commission":"$4.12","Revenue":"€1000,00","City":"Syrostan","Country":"Russia"},
  {"Product_Name":"vestibulum sit amet cursus id","Date_and_Time_of_Sales":"12/15/2023","Order_Value":"Yuan Renminbi","Commission":"$2.56","Revenue":"€1000,00","City":"Tufang","Country":"China"},
  {"Product_Name":"ipsum dolor sit","Date_and_Time_of_Sales":"7/31/2024","Order_Value":"Kuna","Commission":"$0.71","Revenue":"€1000,00","City":"Šibenik","Country":"Croatia"},
  {"Product_Name":"nec dui luctus","Date_and_Time_of_Sales":"2/13/2024","Order_Value":"Yuan Renminbi","Commission":"$2.62","Revenue":"€1000,00","City":"Huabu","Country":"China"},
  {"Product_Name":"congue elementum in","Date_and_Time_of_Sales":"8/4/2024","Order_Value":"Yuan Renminbi","Commission":"$2.47","Revenue":"€1000,00","City":"Huashi","Country":"China"},
  {"Product_Name":"donec diam neque vestibulum eget","Date_and_Time_of_Sales":"12/12/2023","Order_Value":"Rupiah","Commission":"$4.39","Revenue":"€1000,00","City":"Kaliuda","Country":"Indonesia"},
  {"Product_Name":"montes nascetur ridiculus","Date_and_Time_of_Sales":"8/31/2023","Order_Value":"Yuan Renminbi","Commission":"$9.43","Revenue":"€1000,00","City":"Nanmuping","Country":"China"},
  {"Product_Name":"condimentum id luctus nec","Date_and_Time_of_Sales":"1/3/2024","Order_Value":"Kuna","Commission":"$8.71","Revenue":"€1000,00","City":"Gračec","Country":"Croatia"},
  {"Product_Name":"blandit lacinia","Date_and_Time_of_Sales":"4/12/2024","Order_Value":"Shekel","Commission":"$1.96","Revenue":"€1000,00","City":"Az Zubaydāt","Country":"Palestinian Territory"},
  {"Product_Name":"amet nulla","Date_and_Time_of_Sales":"1/2/2024","Order_Value":"Rupiah","Commission":"$7.92","Revenue":"€1000,00","City":"Cabean","Country":"Indonesia"},
  {"Product_Name":"eros vestibulum ac est lacinia","Date_and_Time_of_Sales":"2/16/2024","Order_Value":"Real","Commission":"$8.84","Revenue":"€1000,00","City":"Guaratinguetá","Country":"Brazil"},
  {"Product_Name":"dictumst etiam faucibus cursus","Date_and_Time_of_Sales":"12/22/2023","Order_Value":"Rupiah","Commission":"$5.16","Revenue":"€1000,00","City":"Bojen Kulon","Country":"Indonesia"},
  {"Product_Name":"donec ut mauris eget","Date_and_Time_of_Sales":"10/17/2023","Order_Value":"Krona","Commission":"$8.63","Revenue":"€1000,00","City":"Storuman","Country":"Sweden"},
  {"Product_Name":"sit amet erat nulla tempus","Date_and_Time_of_Sales":"10/16/2023","Order_Value":"Som","Commission":"$9.03","Revenue":"€1000,00","City":"Talas","Country":"Kyrgyzstan"},
  {"Product_Name":"odio justo sollicitudin ut suscipit","Date_and_Time_of_Sales":"10/24/2023","Order_Value":"Yuan Renminbi","Commission":"$5.58","Revenue":"€1000,00","City":"Changning","Country":"China"},
  {"Product_Name":"odio in hac habitasse","Date_and_Time_of_Sales":"4/2/2024","Order_Value":"Rupiah","Commission":"$1.55","Revenue":"€1000,00","City":"Pandan","Country":"Indonesia"},
  {"Product_Name":"pretium nisl ut","Date_and_Time_of_Sales":"11/27/2023","Order_Value":"Peso","Commission":"$0.79","Revenue":"€1000,00","City":"Paulba","Country":"Philippines"},
  {"Product_Name":"ut erat id mauris vulputate","Date_and_Time_of_Sales":"6/19/2024","Order_Value":"Peso","Commission":"$9.72","Revenue":"€1000,00","City":"Santo Niño","Country":"Philippines"},
  {"Product_Name":"aliquam erat volutpat in congue","Date_and_Time_of_Sales":"3/8/2024","Order_Value":"Real","Commission":"$5.60","Revenue":"€1000,00","City":"São João da Barra","Country":"Brazil"},
  {"Product_Name":"in congue etiam justo","Date_and_Time_of_Sales":"7/10/2024","Order_Value":"Ruble","Commission":"$4.64","Revenue":"€1000,00","City":"Tabaga","Country":"Russia"},
  {"Product_Name":"ac neque","Date_and_Time_of_Sales":"2/22/2024","Order_Value":"Yuan Renminbi","Commission":"$2.60","Revenue":"€1000,00","City":"Fushan","Country":"China"},
  {"Product_Name":"rutrum neque aenean auctor gravida","Date_and_Time_of_Sales":"11/21/2023","Order_Value":"Zloty","Commission":"$5.24","Revenue":"€1000,00","City":"Żabia Wola","Country":"Poland"},
  {"Product_Name":"tortor sollicitudin","Date_and_Time_of_Sales":"6/24/2024","Order_Value":"Peso","Commission":"$9.31","Revenue":"€1000,00","City":"Mailag","Country":"Philippines"},
  {"Product_Name":"pretium quis lectus suspendisse","Date_and_Time_of_Sales":"10/29/2023","Order_Value":"Euro","Commission":"$1.72","Revenue":"€1000,00","City":"Beaune","Country":"France"},
  {"Product_Name":"ac nulla sed vel","Date_and_Time_of_Sales":"5/1/2024","Order_Value":"Yuan Renminbi","Commission":"$4.35","Revenue":"€1000,00","City":"Zhagang","Country":"China"},
  {"Product_Name":"quis turpis sed ante vivamus","Date_and_Time_of_Sales":"10/30/2023","Order_Value":"Dollar","Commission":"$1.06","Revenue":"€1000,00","City":"Santo Domingo de los Colorados","Country":"Ecuador"},
  {"Product_Name":"ut dolor morbi vel","Date_and_Time_of_Sales":"11/21/2023","Order_Value":"Koruna","Commission":"$9.61","Revenue":"€1000,00","City":"Velké Opatovice","Country":"Czech Republic"},
  {"Product_Name":"mauris non ligula pellentesque ultrices","Date_and_Time_of_Sales":"7/17/2024","Order_Value":"Hryvnia","Commission":"$4.84","Revenue":"€1000,00","City":"Storozhnytsya","Country":"Ukraine"},
  {"Product_Name":"ut at dolor quis","Date_and_Time_of_Sales":"4/28/2024","Order_Value":"Rial","Commission":"$6.21","Revenue":"€1000,00","City":"Dhī as Sufāl","Country":"Yemen"},
  {"Product_Name":"ante vivamus tortor duis mattis","Date_and_Time_of_Sales":"12/6/2023","Order_Value":"Dollar","Commission":"$3.62","Revenue":"€1000,00","City":"Filabusi","Country":"Zimbabwe"},
  {"Product_Name":"amet nulla quisque arcu libero","Date_and_Time_of_Sales":"7/7/2024","Order_Value":"Rupiah","Commission":"$7.45","Revenue":"€1000,00","City":"Wairiang","Country":"Indonesia"},
  {"Product_Name":"justo maecenas rhoncus aliquam","Date_and_Time_of_Sales":"12/16/2023","Order_Value":"Lek","Commission":"$2.36","Revenue":"€1000,00","City":"Krrabë","Country":"Albania"},
  {"Product_Name":"neque duis","Date_and_Time_of_Sales":"12/25/2023","Order_Value":"Peso","Commission":"$6.95","Revenue":"€1000,00","City":"Cantilan","Country":"Philippines"},
  {"Product_Name":"in est","Date_and_Time_of_Sales":"5/19/2024","Order_Value":"Yen","Commission":"$4.53","Revenue":"€1000,00","City":"Takanabe","Country":"Japan"},
  {"Product_Name":"velit vivamus","Date_and_Time_of_Sales":"9/11/2023","Order_Value":"Euro","Commission":"$1.40","Revenue":"€1000,00","City":"Rates","Country":"Portugal"},
  {"Product_Name":"sed lacus morbi sem mauris","Date_and_Time_of_Sales":"6/6/2024","Order_Value":"Rupiah","Commission":"$9.94","Revenue":"€1000,00","City":"Tarub","Country":"Indonesia"},
  {"Product_Name":"dapibus augue vel accumsan","Date_and_Time_of_Sales":"5/4/2024","Order_Value":"Franc","Commission":"$6.50","Revenue":"€1000,00","City":"Doumé","Country":"Cameroon"},
  {"Product_Name":"nullam sit amet turpis","Date_and_Time_of_Sales":"6/6/2024","Order_Value":"Euro","Commission":"$9.83","Revenue":"€1000,00","City":"Le Grand-Quevilly","Country":"France"},
  {"Product_Name":"diam neque vestibulum eget","Date_and_Time_of_Sales":"5/11/2024","Order_Value":"Rupiah","Commission":"$2.75","Revenue":"€1000,00","City":"Mbongawani","Country":"Indonesia"},
  {"Product_Name":"congue elementum in hac habitasse","Date_and_Time_of_Sales":"10/11/2023","Order_Value":"Bolivar","Commission":"$8.10","Revenue":"€1000,00","City":"Baruta","Country":"Venezuela"},
  {"Product_Name":"venenatis lacinia aenean","Date_and_Time_of_Sales":"5/21/2024","Order_Value":"Rupiah","Commission":"$7.81","Revenue":"€1000,00","City":"Kalimati","Country":"Indonesia"},
  {"Product_Name":"eget eleifend luctus ultricies eu","Date_and_Time_of_Sales":"5/15/2024","Order_Value":"Euro","Commission":"$7.77","Revenue":"€1000,00","City":"Rennes","Country":"France"},
  {"Product_Name":"metus sapien ut nunc","Date_and_Time_of_Sales":"6/1/2024","Order_Value":"Hryvnia","Commission":"$8.28","Revenue":"€1000,00","City":"Mysove","Country":"Ukraine"},
  {"Product_Name":"arcu libero rutrum ac","Date_and_Time_of_Sales":"5/7/2024","Order_Value":"Euro","Commission":"$1.64","Revenue":"€1000,00","City":"Alkmaar","Country":"Netherlands"},
  {"Product_Name":"odio odio elementum","Date_and_Time_of_Sales":"9/28/2023","Order_Value":"Euro","Commission":"$5.81","Revenue":"€1000,00","City":"Saint-Quentin-en-Yvelines","Country":"France"},
  {"Product_Name":"at velit","Date_and_Time_of_Sales":"9/12/2023","Order_Value":"Peso","Commission":"$2.69","Revenue":"€1000,00","City":"Benito Juarez","Country":"Mexico"},
  {"Product_Name":"morbi non","Date_and_Time_of_Sales":"8/30/2023","Order_Value":"Hryvnia","Commission":"$7.24","Revenue":"€1000,00","City":"Brovary","Country":"Ukraine"},
  {"Product_Name":"in tempus","Date_and_Time_of_Sales":"5/14/2024","Order_Value":"Rupee","Commission":"$3.85","Revenue":"€1000,00","City":"Nowshera Cantonment","Country":"Pakistan"},
  {"Product_Name":"dui maecenas tristique","Date_and_Time_of_Sales":"3/30/2024","Order_Value":"Rupiah","Commission":"$9.88","Revenue":"€1000,00","City":"Pondokkaha Kelod","Country":"Indonesia"}]

function Order() {
  return (
    <>
    <h1 className='pt-8 px-6 pb-4 text-[#212636] font-medium text-[1.5rem] lg:text-[2rem]'>Orders</h1>
    <div className='w-[90%] mx-auto'>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product_Name</TableHead>
          <TableHead>Date_and_Time_of_Sales</TableHead>
          <TableHead>Order_Value</TableHead>
          <TableHead>Commission</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Country</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((datas) => (
          <TableRow>
            <TableCell className="font-medium">{datas.Product_Name}</TableCell>
            <TableCell>{datas.Date_and_Time_of_Sales}</TableCell>
            <TableCell>{datas.Order_Value}</TableCell>
            <TableCell>{datas.Commission}</TableCell>
            <TableCell>{datas.Revenue}</TableCell>
            <TableCell>{datas.City}</TableCell>
            <TableCell>{datas.Country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    </>
  )
}

export default Order
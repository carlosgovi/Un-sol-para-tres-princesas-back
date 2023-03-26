import type { NextApiRequest, NextApiResponse } from "next";
import { index as productIndex } from "lib/algolia";
import { airtableBase } from "lib/airtable";
import { getOffsetAndLimitFromRequest } from "lib/requests";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { offset, limit } = getOffsetAndLimitFromRequest(req, 100, 10000);

  airtableBase("Furniture")
    .select({
      pageSize: limit,
    })
    .eachPage(
      async function (records, fetchNextPage) {
        ////recorro los datos de airtable
        const objects = records.map((r) => {
          return {
            objectID: r.id,
            ...r.fields,
          };
        });
        console.log("los objetos a ver si anda en airtable", objects);

        ///inserto en algolia los datos de los objects que estan en airtable
        await productIndex.saveObjects(objects);
        console.log("probando los objetos en Algolia", productIndex);

        console.log("pagina siguiente");
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("termino");
        res.json("termino");
      }
    );
}

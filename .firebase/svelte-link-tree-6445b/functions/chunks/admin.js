import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "svelte-link-tree-6445b";
const FB_CLIENT_EMAIL = "firebase-adminsdk-qprmn@svelte-link-tree-6445b.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXnuUy76pvIbdY\nlt7ENKr+JExDOczdMB+jaAYeLvQjElDjDnMBRR1le/LkbCN9NJap2GuSypfVgrfM\nLcfxGRi2XeYAQbwTiEZvV4D0D+9PoOAGZ+o/6z6P5NLGji3SK8FT6gp9IxEeE8Zl\nRuC7L4kbSJ0dIJFcAxp3WxFYwzubpE326jBrgvDDv+Zxc6XP39OHLWp/vuTOkGHX\nzQB6LZv0Spk1zlIKCtmrTT/Yr+6KeRRT1impVvmSGwww0aEKdwEu4TvINMdAM+GF\nEb/k89zRQKuQ76vjselcgmEYctLlOXFh9QYoumr2s61pgMSfA5V6YyiOSkWUGQwF\njGy03NAtAgMBAAECggEAEaUDacfT1v5+un/GOWGis5QwTtN7aJM431iT+6+9qBYx\n1RahohhzuRNxWw1NnPzBes8Nh8XtYQLHFmsOfVuNEW4Afe+obkJ55euyPVTcZfEk\nGQK/U0RyYacAs2wo33BJnZUbNuBdldk5yZ/zt7zqsQLki9b2K5XN3u15aZHAzlYk\n+U/1JmXdATJrTTozYSzI5b+RaeNjajoOu8OgYa/CDNQn0BJ2TBk/eAPIbQlmdZ9T\ngMjTJlsc5sR9zRx44L7FB5uwpqsxRq4lnCIuzCy4zAtGKII8qhmyYWl9IPZ50DR+\nvP85e25fs1RCe1KvBJeODaBIV7EF5W5V/CllO80ouQKBgQDN3HKDOviQgyetu+TJ\njlF0/rDSxcH/5wtcP9LRCSAz9eI3adVuj31IDXE5P1O+G8B8TNEXYuWa74+V0FZh\nV7UnQ7t5wpw/pTrh4FxLP97iCiJwoFiF0gnGN2Pfv75lBNS6swke1OVSCMXKEhkj\nuZWrGE4uF2/7mFN/6C53cn9DpQKBgQC8jIb74bf0HgHhEDQAeDrQAIuXXf1rySbR\n7Lgyq5QZUgW1tnJ4IeUmGIBeAtsPh1LkkjUQjqbDv5Ma0m3W7EJkQ+OIIAjLE9JL\nq2U6BsiicJUW2u1S4pfqyK6+5DofOaTEmMCapiICdWDIXCP0zVff4z3FRXTTAHAd\nuXHiDYcT6QKBgQCPMTHuGkzfqHsnG7UuhfIfITG5ypkA+aMrTbHEeUaPHg92YAV3\n3BNW1RLWsTf82qzvSTd/vuja9pu3p60OFMYLQ8/aCAZLNxFYIInSReEw9b+y+7XX\nj5wA5nJwJp23Ar8+Bl7ntUq13yhFQIWAFg0Hb+ahpOfd57zdEZGQwHHJiQKBgQCG\nrK2B3nEBeimHc4ZhS39esPUEEkuAILaMvVO4RZvMFi0j5QSQUE2Xz2ppPAryZYtM\n3i3u/KWbLgxJ3UI9gJXPfjpYMeF2BFtyVyM/tja66EVlhMx9JoKyXdOLYAMv6IGL\nNzxjegTS0rplgoLgSYfZ0Dt/26OdTzPF137Dozv3eQKBgDSuzg64yw5dGXkQWhhs\n0im8lEmsEKN1oPkbUryF7ASt+w/mf7s51BS5X9FrtA/EcFPFV3eDm8+QifcDgoK1\nrJ40tjjPyofXFozzkmjFc2e8tyANwdUA0WEwppp08oAAyP1VV8aa9S1UQL9ruy3s\naOBSkNtEQgsxp1ylIX1bWHio\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};

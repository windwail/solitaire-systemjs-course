
var normalize = System.normalize;

System.normalize = function (name, parentName, parentAddres) {

    console.log("normalize: "+JSON.stringify({
        name: name,
        parentAddres: parentName,
        parentAddres: parentAddres
    }));

    return normalize.call(this, name, parentName, parentAddres);
};

var systemLocate = System.locate;
System.locate = function (load) {
    console.log("locating: " + JSON.stringify(load));
    return systemLocate.call(this, load);
};

var systemFetch = System.fetch;
System.fetch = function (load) {
    console.log("fetching: " + JSON.stringify(load));
    return systemFetch.call(this, load);
};

var systemTranslate = System.translate;
System.translate = function (load) {
    console.log("translating: " + JSON.stringify(load));
    return systemTranslate.call(this, load);
};

var systemInstantiate = System.instantiate;
System.instantiate = function (load) {
    console.log("translating: " + JSON.stringify(load));
    return systemInstantiate.call(this, load);
};


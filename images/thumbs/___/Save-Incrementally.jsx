// Javascript for Adobe Illustrator CC (26.0), Photoshop CC (23.1) InDesign CC (17.0), InCopy CC (17.0) and FrameMaker 2020
// Scriptname:	Save-Incrementally
// 						a missing feature
// (c) 2021 – 2022 by J. Kriebeler
// Webpage: http://www.computergrafik-know-how.de/javascript-ai/
//					with tips for Installation and use in English and German.
// ---------------------------------------------------------------------------------------------------------------------------
// (English)
// # What does the script do?
//		If a file (.ai, .psd or .indd) is saved and the script is called, it saves the file with a consecutive number.
// # Who is the script for?
//		The script is for every user of Illustrator, Photoshop, InDesign and InCopy.
// # How to use the script:
// 		1. Save the file as (.ai, .psd or .indd).
// 		2. Start the script e.g. by dragging it onto the Illustrator.
// 		3. The script saves the file with an automatically consecutive number in the same folder as the original file.
//
// If you need a function in Illustrator but do not programme it yourself, then contact me. I am happy to take on small jobs: info@cg4u.de
// ---------------------------------------------------------------------------------------------------------------------------
// (Deutsch)
// # Was macht das Skript?
//		Ist eine Datei (.ai, .psd oder .indd) gespeichert und wird das Skript aufgerufen, dann speichert es die Datei mit einer fortlaufenden Nummer.
// #Für wen ist das Skript?
//		Das Skript ist für jeden Benutzer von Illustrator, Photoshop, InDesign und InCopy.
// # So wenden Sie das Skript an:
// 		1. Speichern Sie die Datei als (.ai, .psd oder .indd).
// 		2. Starten Sie das Skript z.B. durch Ziehen auf den Illustrator.
// 		3. Das Skript speichert die Datei mit einer automatisch fortlaufenden Nummer in den gleichen Ordner, wie die Originaldatei.
//
// Wenn Sie eine Funktion in Illustrator benötigen, jedoch nicht selbst programmieren, dann sprechen Sie mich an. Ich übernehme gerne kleine Aufträge: info@cg4u.de
// ---------------------------------------------------------------------------------------------------------------------------
// Donate (optional)
// If you find this script helpful and it save you time, you can buy me a coffee
//    via PayPal    https://www.paypal.com/donate?hosted_button_id=WF22LR538WW8Y
//    Thanks!
// =======================================================================
// Versions:
// 2.7.5 Corrections and improvements for InDesign and Photoshop									– 2022-08-04
// 2.7.4 Changed Text in UI																																		– 2022-08-04
// 2.7.3 Enhance saving for Photoshop																											– 2022-08-04
// 2.7.2 New way of displaying the checkboxes																							– 2022-02-11
// 2.7.1 Illustrator new option: convert text to outline (path)																			– 2022-02-11
// 2.7.0 Illustrator new feature: save as ai8 (version 8 for CINEMA 4D)														– 2022-02-11
// 2.6.0 Version for FrameMaker 2020																											– 2022-01-22
// 2.5.3 Date and Time with 0 in front when number is smaller than 10														– 2022-01-21
// 2.5.2 Missing translations inserted																											– 2022-01-15
// 2.5.1 Save unsaved work file in InDesign with extention .indd and in InCopy with .icml							– 2022-01-14
// 2.5. All capabilities also added for Adobe InCopy																					– 2022-01-14
// 2.4.1 More export option for InDesign like XML																						– 2022-01-14
// 2.4 If working file is not saved, allow to save it and go on																		– 2022-01-13
// 2.3 Simplify the programming of the user interface																					– 2022-01-13
// 2.2 New option in UI: if there was no modification, the work file is not saved											– 2022-01-13
// 2.1.2 Better check which application is running																						– 2022-01-13
// 2.1.1 Stop warning dialog when drag and drop a .jsx file into Illustrator													– 2022-01-11
// 2.1 Saving also on external hard disk and network drives																		– 2022-01-10
// 2.0. Optimize the source code for example for Photoshop																		– 2022-01-07
// 1.9.9 Show all variables in user interface for Photoshop	and InDesign													– 2022-01-07
// 1.9.8 Show all variables in user interface for Illustrator																			– 2022-01-06
// 1.9.7 Add to prototype methods for arrays																								– 2022-01-06
// 1.9.6 Save and read varaibles from the user interface as JSON files														– 2022-01-05
// 1.9.5 Show user interface if there is no desktop folder named 'jsx-save_delete-me'								– 2022-01-05
// 1.9.4 Changing the variables for user interface and JSON save/read														– 2022-01-04
// 1.9.3 Function for reading and writing JSON files (without JSON library) that are to contain presets		– 2022-01-04
// 1.9.2 User interface with donation button, openURL and Ok and Cancle function									– 2022-01-03
// 1.9.1 Changes and additions to the variables																							– 2022-01-03
// 1.9 new option date and time instead of counter																						– 2022-01-02
// 1.8 Abort if work file has no extension 																										– 2022-01-01
// 1.7 Save the same fileformat like ai, eps, svg, gif, jpg, psd, png, tif (and swf) in Illustrator						– 2021-12-30
// 1.6 Save the same fileformat like psd, psb, bmp, eps, gif, jpg, pdf, png, raw, tga or tif in Photoshop		– 2021-12-29
// 1.5 Save original file automatically in AI and IND like indd, pdf, epub, idml												– 2021-12-29
// 1.4 Create a quick copy in AI and IND																										– 2021-12-29
// 1.3 Detects the language of the app																										– 2021-12-24
// 1.2 Version for InDesign 																															– 2021-09-23
// 1.1 Version for Photoshop 																														– 2021-09-23
// 1.0 Initial version for Illustrator 																												– 2021-09-23
// =======================================================================
// === START OF SCRIPT ====================================================


// Global variable for the script, part one
var cJSversion = "2.7.5";


// JSON – Init the Javascript Object
// Variables can be changed by user in the user interface
var JO = { 
	JSname: "Save-Incrementally", 
	JSversion: cJSversion,
	uiDigits: 4,
	uiInitialValue:0,
	uiSound: true,
	uiNumSeparator: "-",
	uiShowDateTime: false, 
	uiCopyPath: "",
	uiCopyEXT: "",
	uiShowDialog: true,
	uiSaveOnlyChanged: false,
	uiTextOutlined: false
};


// Global variable for the script, part two
try {
	var vDocRef = app.activeDocument;
	var vSelection = vDocRef.selection;
}
catch(e){};
var f = new File();
var w, bDonation, vCancel;
var bOK = false;
var bCheck1 = false; // if true create folder and hide dialog
var vCounter = 0;
var vSeparator = "/"; // Universal separator symbol for path
var vComma =","; // '/' is not allowed
var vPos = 0;
var vMax = 9;
var vApp = ""; // Name of Application: AI, PS, IC, ID, BR, FM
var vWorkEXT = "";
var vWorkPath = "";
var vCopyPath = "";
var vError = "";
var vResult = 0;
var cLanguage = 1;
var vSaveOnlyChanged = false;
var vAsCopy = true; // later as JO.uiAsCopy
var cAiEXT = "ai,ai8,eps,svg,pdf,gif,jpg,psd,png,tif,swf"; // swf only before AI 2022 (26.0)
var cPsEXT = "psd,psb,bmp,eps,gif,jpg,pdf,png,tga,tif";
var cIdEXT = "indd,pdf,epub,idml,xml,html"; 
var cIcEXT = "icml,pdf,rtf,txt";
var cFmEXT = "fm,mif,sgml,xml,txt"; 
var cFilenameJSONai = "jsx_save_ai.json";
var cFilenameJSONps = "jsx_save_ps.json";
var cFilenameJSONid = "jsx_save_id.json";
var cFilenameJSONic = "jsx_save_ic.json";
var cFilenameJSONfm = "jsx_save_fm.json";
var cFolderDontShowUI = "jsx-save_delete-me";
var aMsg = new Array;
// Messages in English and German
aMsg[[0,0]] = "Saving not possible.";
aMsg[[0,1]] = "Speichern nicht möglich.";
aMsg[[1,0]] = "The automatic counter has reached the maximum for ";
aMsg[[1,1]] = "Der automatische Zähler hat das Maximum für ";
aMsg[[2,0]] = " digits.";
aMsg[[2,1]] = " Stellen erreicht.";
aMsg[[3,0]] = "The file is not yet saved. Do you want to save it now?";
aMsg[[3,1]] = "Die Datei ist noch nicht gespeichert. Wollen Sie diese jetzt speichern?";
aMsg[[4,0]] = "Abbort. Please save the file with an extension.";
aMsg[[4,1]] = "Abbruch. Bitte speichern Sie die Datei mit einer Endung.";
aMsg[[5,0]] = "Abbort. The Javascript only runs in Illustrator, Photoshop, InDesign, InCopy or FrameMaker.";
aMsg[[5,1]] = "Abbruch. Das Javascript läuft nur in Illustrator, Photoshop, InDesign, InCopy oder FrameMaker.";
aMsg[[6,0]] = "Go to Paypal";
aMsg[[6,1]] = "Gehe zu Paypal";
aMsg[[7,0]] = "Save the file:";
aMsg[[7,1]] = "Speichern Sie die Datei ab:";
aMsg[[8,0]] = "Abbort. Please save the file first and then call up the Javascript again.";
aMsg[[8,1]] = "Abbruch. Bitte speichern Sie die zuerst die Datei und rufen dann das Javascript erneut auf.";
aMsg[[50,0]] = "If you find this timesaving javascript helpful,\nyou can buy me a coffee. Thanks.";
aMsg[[50,1]] = "Wenn Sie dieses zeitsparende Javascript hilfreich finden,\nkönnen Sie mir einen Kaffee spendieren. Danke.";
aMsg[[51,0]] = "Thank you for your support.";
aMsg[[51,1]] = "Vielen Dank für Ihre Unterstützung.";
aMsg[[52,0]] = "Hide this dialogue until the folder »"+ cFolderDontShowUI + "«";
aMsg[[52,1]] = "Verstecke diesen Dialog, bis der Ordner »"+ cFolderDontShowUI + "«";
aMsg[[53,0]] = "Aborted by user."
aMsg[[53,1]] = "Abbruch durch Anwender.";
aMsg[[54,0]] = "is deleted from the desktop again by you, the user.";
aMsg[[54,1]] = "wieder vom Schreibtisch durch Sie, dem Benutzer, gelöscht wird.";
aMsg[[60,0]] = "Counter for the file name:";
aMsg[[60,1]] = "Zähler für den Dateinamen:";
aMsg[[61,0]] = "Number of digits:";
aMsg[[61,1]] = "Anzahl Ziffern:";
aMsg[[62,0]] = "Start value:"
aMsg[[62,1]] = "Startwert:"
aMsg[[63,0]] = "Separator:";
aMsg[[63,1]] = "Trennzeichen:";
aMsg[[64,0]] = "File format and storage path:";
aMsg[[64,1]] = "Dateiformat und Speicherpfad:";
aMsg[[65,0]] = "Save copy with ..."; 
aMsg[[65,1]] = "Kopie speichern mit ..."; 
aMsg[[66,0]] = "File format:"; 
aMsg[[66,1]] = "Dateiformat:"; 
aMsg[[67,0]] = "Path for copy:";
aMsg[[67,1]] = "Pfad für Kopie:";
aMsg[[68,0]] = "Select a folder to save the copies:"
aMsg[[68,1]] = "Wählen Sie einen Ordner zum Speichern der Kopien aus:"
aMsg[[69,0]] = "Options:";
aMsg[[69,1]] = "Optionen:";
aMsg[[70,0]] = "Date and time instead of counter.";
aMsg[[70,1]] = "Datum und Uhrzeit statt Zähler.";
aMsg[[71,0]] = "Play sound on successful save.";
aMsg[[71,1]] = "Ton bei erfolgreichem Speichern abspielen.";
aMsg[[72,0]] = "(no path selected)";
aMsg[[72,1]] = "(kein Pfad gewählt)"; 
aMsg[[73,0]] = "Do NOT save the working document.";
aMsg[[73,1]] = "Das Arbeitsdokument NICHT speichern."; 
aMsg[[74,0]] = "OK";
aMsg[[74,1]] = "OK";
aMsg[[75,0]] = "Cancel";
aMsg[[75,1]] = "Abbruch";
aMsg[[77,0]] = "Convert text to outlines";
aMsg[[77,1]] = "Text in Pfade umwandeln";


// ------ FUNCTIONS
function fRGB() { // for Photoshop only
	var vResult = vDocRef;
	vResult.changeMode(ChangeMode.RGB); // change to RGB
	return vResult;
} // end-of-function


function fAddZeros (pDigits, pNumber, pFigure) { // Put zeros in front of a number so that all numbers have the same length.
	var vResult = pNumber.toString(10);
	var vDigits = pNumber.toString(10).length; // how many digits in pNumber?
	vAddZeros = pDigits - vDigits; // how many zeros are needed?
	for (var f = 0; f < vAddZeros; f++ ) { vResult = pFigure + vResult; } // Add Zeros in Front
	return (vResult);
} // end-of-function


function fBi(pNumber){ // if pNumber < 10 than add zero in front
	var vReturn = ""+ pNumber;
	if (pNumber < 10) { vReturn = "0" + pNumber}
	return vReturn
} // end-of-function


function fFullNameFM(){ // for FrameMaker only
		var vFMname = ""+ vDocRef.Name; // get the Path and Name 
		vFMname = File(vFMname).fullName; // get the universal Path
		return vFMname;
} // end-of-function


function fDocRefPath () { // vDocRef.path is not possible in Photoshop, InDesign or InCopy
	var vResult = ""
	if ((vApp == "ID") | (vApp == "IC")){ 
		var vFullName = ""+ vDocRef.fullName; // trick with empty string
		var vPos = vFullName.lastIndexOf(vSeparator);
		vResult = vFullName.substring(0,vPos);
	}
	if (vApp == "FM") {
		var vFullName = fFullNameFM(); // get the universal Path
		var vPos = vFullName.lastIndexOf(vSeparator);
		vResult = vFullName.substring(0,vPos);
	}
	if ((vApp == "AI") | (vApp == "BR")) { vResult = vDocRef.path; }
	return vResult;
} // end-of-function


function savePSB(saveFile) { // – v1.6.
	// source: found in Adobe forum at
	// https://community.adobe.com/t5/photoshop-ecosystem-discussions/psb-file-type-save-as-cannot-be-done-in-photoshop-script/m-p/8846241
	var desc1 = new ActionDescriptor(); 
	var desc2 = new ActionDescriptor(); 
	desc2.putBoolean( stringIDToTypeID('maximizeCompatibility'), true ); 
	desc1.putObject( charIDToTypeID('As  '), charIDToTypeID('Pht8'), desc2 ); 
	desc1.putPath( charIDToTypeID('In  '), new File(saveFile) ); 
	desc1.putBoolean( charIDToTypeID('LwCs'), true ); 
	executeAction( charIDToTypeID('save'), desc1, DialogModes.NO ); 
} // end-of-function


function saveAI(saveFile, pEXT) {
	if (JO.uiTextOutlined == true) {
		var vPageItems = vDocRef.pageItems;
		for (x=0; x < vPageItems.length; x++) { 
			if (vPageItems[x].typename == "TextFrame") { vGI = vPageItems[x].createOutline();}
		}
	}
	switch (pEXT) {
		case "ai8": saveOpts = new IllustratorSaveOptions(); saveOpts.compatibility = Compatibility.ILLUSTRATOR8; vDocRef.saveAs(new File(saveFile), saveOpts); break;
		case "eps": saveOpts = new EPSSaveOptions(); vDocRef.saveAs(new File(saveFile), saveOpts); break;
		case "svg": saveOpts = new ExportOptionsSVG(); vDocRef.exportFile(new File(saveFile), ExportType.SVG, saveOpts); break;
		case "pdf": saveOpts = new PDFSaveOptions(); vDocRef.saveAs(new File(saveFile), saveOpts); break;
		case "gif": saveOpts = new ExportOptionsGIF(); vDocRef.exportFile(new File(saveFile), ExportType.GIF, saveOpts); break;
		case "jpg": saveOpts = new ExportOptionsJPEG(); vDocRef.exportFile(new File(saveFile), ExportType.JPEG, saveOpts); break;
		case "psd": saveOpts = new ExportOptionsPhotoshop(); vDocRef.exportFile(new File(saveFile), ExportType.PHOTOSHOP, saveOpts); break;
		case "png": saveOpts = new ExportOptionsPNG24(); vDocRef.exportFile(new File(saveFile), ExportType.PNG24, saveOpts); break;
		case "tif": saveOpts = new ExportOptionsTIFF(); vDocRef.exportFile(new File(saveFile), ExportType.TIFF, saveOpts); break;
		case "swf": saveOpts = vDocRef.exportFile(new File(saveFile), ExportType.FLASH); break;
		default: vDocRef.saveAs(new File(saveFile)); 
	}
	if (JO.uiTextOutlined == true) { app.undo(); }
} // end-of-function


function savePS(vSaveFile, pEXT) {
	switch (pEXT) {
		case "psb": fSavePSB(vSaveFile); break;
		case "eps": vDocRef.saveAs(new File(vSaveFile),EPSSaveOptions,vAsCopy); break;
		case "pdf": vDocRef.saveAs(new File(vSaveFile),PDFSaveOptions,vAsCopy); break;
		case "tif": vDocRef.saveAs(new File(vSaveFile),TiffSaveOptions,vAsCopy); break;
		case "tiff": vDocRef.saveAs(new File(vSaveFile),TiffSaveOptions,vAsCopy); break;
		case "bmp": vDR = fRGB(); vDR.saveAs(new File(vSaveFile),BMPSaveOptions,vAsCopy); break;
		case "gif": vDR =fRGB(); vDR.saveAs(new File(vSaveFile),GIFSaveOptions,vAsCopy); break;
		case "jpg": vDR =fRGB(); vDR.saveAs(new File(vSaveFile),JPEGSaveOptions,vAsCopy); break;
		case "jpeg": vDR =fRGB(); vDR.saveAs(new File(vSaveFile),JPEGSaveOptions,vAsCopy); break;
		case "png": vDR =fRGB(); vDR.saveAs(new File(vSaveFile),PNGSaveOptions,vAsCopy); break;
		case "tga": vDR =fRGB(); vDR.saveAs(new File(vSaveFile),TargaSaveOptions,vAsCopy); break;
		default: vDocRef.saveAs(new File(vSaveFile),PhotoshopSaveOptions,vAsCopy);
	}
} // end-of-function


function saveIDtxt(SaveFile){ // ###
	
} // end-of-function


function saveID(saveFile, pEXT) { 
	var saveFileINDD = saveFile + "." + pEXT;
	switch (pEXT) {
		case "pdf": vDocRef.exportFile(ExportFormat.pdfType, File(saveFile),false); break;
		case "epub": vDocRef.exportFile(ExportFormat.EPUB, File(saveFile),false); break;
		case "xml": vDocRef.exportFile(ExportFormat.xml, File(saveFile),false); break;
		case "html": vDocRef.exportFile(ExportFormat.html, File(saveFile),false); break;
		case "idml": vDocRef.exportFile(ExportFormat.INDESIGN_MARKUP, File(saveFile),false); break;
		case "txt": saveIDtxt(saveFile); break;
		default: vDocRef.save(new File(saveFileINDD)); 
	}
} // end-of-function


function saveIC(saveFile, pEXT) { 
	switch (pEXT) {
		case "pdf": vDocRef.exportFile(ExportFormat.pdfType, File(saveFile),false); break;
		case "txt": vDocRef.stories.item(0).exportFile(ExportFormat.textType, File(saveFile),false); break;
		case "rtf": vDocRef.stories.item(0).exportFile(ExportFormat.rtf, File(saveFile),false); break;
		default: vDocRef.save(new File(saveFile)); 
	}
} // end-of-function


function saveFM(saveFile, pEXT) { 
	var vFullName = saveFile;
	var vParams = GetSaveDefaultParams();
	var vReturn = new PropVals();
	// var vPos = vFullName.lastIndexOf("."); // Alternative to .replace
	// vFullName = vFullName.substring(0,vPos) + "." + pEXT;
	var vFullName = vFullName.replace (/\.[^\.\\]+$/,"."+pEXT);
	var i = GetPropIndex(vParams, Constants.FS_FileType);
	switch (pEXT) { 
		case "mif": vParams[i].propVal.ival = Constants.FV_SaveFmtInterchange; break;
		case "sgml": vParams[i].propVal.ival = Constants.FV_TYPE_SGML; break;
		case "txt": vParams[i].propVal.ival = Constants.FV_SaveFmtText; break;
		case "xml": vParams[i].propVal.ival = Constants.FV_SaveFmtXml; break;
		default: vParams[i].propVal.ival = Constants.FV_SaveFmtBinary; // Type .fm
	}
	vDocRef.Save(vFullName, vParams, vReturn);
} // end-of-function


Array.prototype.indexOf = function ( item ) {
	var index = 0, length = this.length, result = -1
	for ( ; index < length; index++ ) {
		if ( this[index] === item ) { result = index; break;} 
	}
	return result;
} /// end-of-function


Array.prototype.size = function ( item ) { // use this instead of arry.length
	return this.length;
} /// end-of-function


// --- JSON convert, write, read, delete file
function fJsonString(pString) { // ObjectToString – v1.9.3
	var vString = ""+ (pString.toSource());
	return (vString.substring(1, vString.lastIndexOf(")"))); // tip: return without ( ... ) at start and end
} // end-of-function


function fJsonParse(pObj) { // String to Object – v1.9.3
	// a string like  "{ ort:'bar', nummer:42 }" will become an object
	return Function('"use strict";return (' + pObj + ')')();
} // end-of-function


function fWriteJSON(pFileName) { // Write = Save Object in a JSON file – v1.9.3 
	var vResult = 0;
	if ( pFileName != null ) {
		var vNewPath = Folder.myDocuments + vSeparator + pFileName;
		var file = File(vNewPath);
		try{
			var vString = fJsonString(JO);
			file.open("w"); file.writeln(vString); file.close();
			vResult = 1;
		}
		catch(e){alert(e);}
	}
	return (vResult);
} // end-of-function


function fReadJSON (pFileName) { // Read JSON file and put it into an object – v1.9.3
	var vResult = 0
	if ( pFileName != null ) {
		var vNewPath = Folder.myDocuments + vSeparator + pFileName;
		var file = File(vNewPath);
		var vString = "";
		if (file.exists == true) {
			try{
				file.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
				file.open("r"); vString = file.read(); file.close();
				JO = fJsonParse(vString);
				vResult = 1;
				JO.JSversion = cJSversion; // get the (new) version number
			}
			catch(e){alert(e); }
		}
	}
	return (vResult);
} // end-of-function


function fCreateFolder() { // Create folder 'jsx-save_delete-me' to hide user interface – v1.9.5
	var vPathdesktop = Folder.desktop;
	var vFolderName = cFolderDontShowUI;
	var vNewPath = vPathdesktop + "/"+ vFolderName;
	var file = Folder(vNewPath);
	if ( file.exists == false ) { file.create(); } // Create folder
} // end-of-function


function fFolderExists() { // check if the folder to hide dialog is on the desktop – v1.9.5
	var vPathdesktop = Folder.desktop;
	var vFolderName = cFolderDontShowUI;
	var vNewPath = vPathdesktop + "/"+ vFolderName;
	var file = Folder(vNewPath);
	return (file.exists); // Result
} // end-of-function


function fCheckIfSaved() {
	var vError = "";
	try { 
		if (vApp == "FM") {
			if (vDocRef.Name == "") { vError = aMsg[[3,cLanguage]]; }
			else {
				var vPos = vDocRef.Name.lastIndexOf("."); 
				var vExtention = vDocRef.Name.substring(vPos+1); 
			}
		}
		else {
			var vPos = vDocRef.name.lastIndexOf("."); 
			var vExtention = vDocRef.name.substring(vPos+1); 
			if (vApp == "AI") { if (aAiEXT.indexOf(vExtention) < 0 ) { vError = aMsg[[3,cLanguage]]; } }// stop, if document is unsaved, for AI
		}
	} 
	catch (e) {vError = aMsg[[3,cLanguage]]; }
	return vError;
} // end-of-function


// --- all about Dialogs
function openURL( address ) { // – v1.9.2
    var vPathApp = ""+ app.path; // trick: use an empty string to convert it to a string that AI-JS can read
    if (vPathApp.indexOf("Application")> 0) { // it's a Mac, do the Mac magic
        f = File( Folder.temp + "/aiOpenURL.webloc" ); 
        f.open( "w" ); 
        f.write("<?xml version='1.0' encoding='UTF-8'?>"+"\n");
        f.write("<!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'>"+"\n");
        f.write("<plist version='1.0'><dict><key>URL</key>"+"\n");
        f.write("<string>https://"+ address + "</string>"+"\n");
        f.write("</dict></plist>"+"\n");
        f.close(); 
    }
    else { // it's a PC, do the PC stuff
        f = File( Folder.temp + "/aiOpenURL.url" ); 
        f.open( "w" ); 
        f.write( '[InternetShortcut]' + '\r' + 'URL=https://' + address + '\r' ); 
        f.close(); 
    }
    f.execute(); 
};  // end-of-function


function StartDialog(){
	var vName = JO.JSname + " " + JO.JSversion + " (" + vApp + ")";
	w = new Window ("dialog {alignChildren: 'fill'}", vName, undefined, {closeButton: false});
	var gTop = w.add ("group {alignChildren: 'right'}");
	var forDonation = gTop.add ("statictext",undefined, "",{multiline: true});
	if (vApp == "PS") {forDonation.minimumSize.width = 350; forDonation.maximumSize.height = 35; forDonation.minimumSize.height = 35;}
	if (vApp == "AI") {forDonation.minimumSize.width = 350; forDonation.maximumSize.height = 30;}
	if ((vApp == "ID") | (vApp == "IC")) {forDonation.minimumSize.width = 350; forDonation.maximumSize.height = 30;}
	if (vApp == "FM") {forDonation.minimumSize.width = 350; forDonation.maximumSize.height = 30; }
	forDonation.text = aMsg[[50,cLanguage]];
	forDonation.characters = 40;
	var buttonsTop = gTop.add ("group");
	bDonation = buttonsTop.add ("button", undefined, aMsg[[6,cLanguage]]);
	var vHR = w.add ("panel"); // This one shows as a horizontal rule
	vHR.preferredSize = [450,1];
} // end-of-function


function EndDialog() {
	// Block A
	var vHR = w.add ("panel"); // This one shows as a horizontal rule
	vHR.preferredSize = [450,1];
	// Block B
	var gPanelB2 = w.add ("panel", undefined, aMsg[[52,cLanguage]]);
	gPanelB2.alignChildren = "top";
	var gEndbutton = gPanelB2.add ('group {orientation: "row"}'); 
	gEndbutton.alignChildren = "top"; gEndbutton.alignment = "left";
	bCheck1 = gEndbutton.add ("checkbox", undefined, aMsg[[54,cLanguage]]);
	bCheck1.minimumSize.width = 400;
	if (JO.uiShowDialog == false) {bCheck1.value = true; }
	
	// Block C
	var vHR = w.add ("panel"); // This one shows as a horizontal rule
	vHR.preferredSize = [450,1];
	// Block D
	var gButtons = w.add ('group {orientation: "row"}');
	gButtons.alignChildren = "fill"; gButtons.alignment = "right";
	bCancel = gButtons.add ("button"); bCancel.text = aMsg[[75,cLanguage]];
	bOK = gButtons.add ("button"); bOK.text = aMsg[[74,cLanguage]];
	// check onClick
	bCancel.onClick = function () {bCancel.active = false; w.close();}
	bDonation.onClick = function () { // Open URL button for donation
		openURL( "www.paypal.com/donate?hosted_button_id=WF22LR538WW8Y");
		try { f.remove(); } catch(e) {} // try to delete the aiOpenURL-file 
		bDonation.active = false; // reset button
	}
	bCheck1.onClick = function () { 
		if (bCheck1.value == true) {JO.uiShowDialog = false; } else {JO.uiShowDialog = true;}
	}
	return(bOK);
} // end-of-function


function fDialog() { // show Dialog
	StartDialog();
	// Block A 
	var aCounter = [2,3,4,5,6,7,8,9];
	var vPos = aCounter.indexOf(JO.uiDigits);
	if (vPos < 0) {vPos = 2;}
	var gPanelA = w.add ("panel", undefined, aMsg[[60,cLanguage]]);
	gPanelA.alignChildren = "fill";
	var gInput1 = gPanelA.add ("group"); 
	gInput1.alignment = "right";
	gInput1.add ("statictext", undefined, aMsg[[61,cLanguage]]);
	vInput1 = gInput1.add ("dropdownlist", undefined, aCounter);
	if (vApp == "AI") { vInput1.minimumSize.width = 248; }
	if (vApp == "PS") { vInput1.minimumSize.width = 302;}
	if (vApp == "FM") { vInput1.minimumSize.width = 302;}
	if ((vApp == "ID") | (vApp == "IC")) { vInput1.minimumSize.width = 248; }
	vInput1.selection = vPos;
	vInput1.active = true;
	// Block A2
	var gInput2 = gPanelA.add ("group"); 
	gInput2.alignment = "right";
	gInput2.add ("statictext", undefined, aMsg[[62,cLanguage]]);
	vInput2 = gInput2.add ("edittext", undefined, JO.uiInitialValue);
	vInput2.characters = 30;
	if (vApp == "FM") { vInput2.minimumSize.width = 302;}
	// Block A3
	var gInput3 = gPanelA.add ("group"); 
	gInput3.alignment = "right";
	gInput3.add ("statictext", undefined, aMsg[[63,cLanguage]]);
	vInput3 = gInput3.add ("edittext", undefined, JO.uiNumSeparator);
	vInput3.characters = 30;
	if (vApp == "FM") { vInput3.minimumSize.width = 302;}
	// Block C
	var gPanelC = w.add ("panel", undefined, aMsg[[64,cLanguage]]);
	gPanelC.alignChildren = "fill";
	// Block C2
	if (vApp == "AI") { var vPos = aAiEXT.indexOf(JO.uiCopyEXT); }
	if (vApp == "PS") { var vPos = aPsEXT.indexOf(JO.uiCopyEXT); }
	if (vApp == "ID")  { var vPos = aIdEXT.indexOf(JO.uiCopyEXT); }
	if (vApp == "IC") { var vPos = aIcEXT.indexOf(JO.uiCopyEXT); }
	if (vApp == "FM") { var vPos = aFmEXT.indexOf(JO.uiCopyEXT); }
	if (vPos < 0) { vPos = 0; }
	var gInput7= gPanelC.add ("group"); 
	gInput7.alignment = "right";
	gInput7.add ("statictext", undefined, aMsg[[66,cLanguage]]);
	if (vApp == "AI") { vInput7 = gInput7.add ("dropdownlist", undefined, aAiEXT); vInput7.minimumSize.width = 250;}
	if (vApp == "PS") { vInput7 = gInput7.add ("dropdownlist", undefined, aPsEXT); vInput7.minimumSize.width = 302;}
	if (vApp == "ID") { vInput7 = gInput7.add ("dropdownlist", undefined, aIdEXT); vInput7.minimumSize.width = 250;}
	if (vApp == "IC") { vInput7 = gInput7.add ("dropdownlist", undefined, aIcEXT); vInput7.minimumSize.width = 250;}
	if (vApp == "FM") { vInput7 = gInput7.add ("dropdownlist", undefined, aFmEXT); vInput7.minimumSize.width = 302;}
	vInput7.selection = vPos;
	// BlockC3
	var gInput8 = gPanelC.add ("group"); 
	if (JO.uiCopyPath != "") { var file = Folder(JO.uiCopyPath);  if ( file.exists == false) { JO.uiCopyPath = vWorkPath; } }
	if (JO.uiCopyPath == "") {JO.uiCopyPath = vWorkPath;}
	gInput8.alignment = "left";
	bInput8 = gInput8.add ("button", undefined, aMsg[[67,cLanguage]]);
	if (JO.uiCopyPath != "") { vInput8 = gInput8.add ("statictext", undefined, JO.uiCopyPath); }
	else { vInput8 = gInput8.add ("statictext", undefined, aMsg[[72,cLanguage]]); }
	vInput8.characters = 30;
	vInput8.minimumSize.width = 380;
	bInput8.onClick = function () { 
		vResult = Folder.selectDialog( aMsg[[68,cLanguage]] );
		if (vResult != null) { vInput8.text = vResult; JO.uiCopyPath = vResult; } else { JO.uiCopyPath = ""; vInput8.text = aMsg[[72,cLanguage]]; }
		bInput8.active = false; // reset button
	}
	// Block B
	var gPanelB = w.add ("panel", undefined, "Optionen:");
	gPanelB.alignChildren = "top";
	if (vApp == "AI") {
		var gInput10 = gPanelB.add ('group {orientation: "row"}'); gInput10.alignment = "left";
		vInput10 = gInput10.add ("checkbox", undefined, aMsg[[77,cLanguage]]);
		vInput10.value = JO.uiTextOutlined;
	}
	// Block B0
	var gInput4 = gPanelB.add ('group {orientation: "row"}'); gInput4.alignment = "left";
	vInput4 = gInput4.add ("checkbox", undefined, aMsg[[70,cLanguage]]);
	vInput4.value = JO.uiShowDateTime;
	// Block B1
	var gInput9 = gPanelB.add ('group {orientation: "row"}'); gInput9.alignment = "left";
	vInput9 = gInput9.add ("checkbox", undefined, aMsg[[73,cLanguage]]);
	vInput9.value = JO.uiSaveOnlyChanged;
	// Block B2
	if (vApp == "FM") { JO.uiSound = false; } // no beep in FrameMaker
	else {
		var gInput5 = gPanelB.add ('group {orientation: "row"}'); gInput5.alignment = "left";
		vInput5 = gInput5.add ("checkbox", undefined, aMsg[[71,cLanguage]]);
		vInput5.value = JO.uiSound;
	}
	// show End of Dialog
	EndDialog();
	return (w.show() );
} // end-of-function
// --- end of FUNCTIONS


// --- Main Script
// Step 0a: Detect which app is running
try {
	var vAppPath = "" + app.path; // tell if it is AI or PS
	if (vAppPath.indexOf("Illustrator") > -1) { vApp = "AI";}
	if (vAppPath.indexOf("Photoshop") > -1) { vApp = "PS"}
}
catch (e) { }
if (vApp == "") {
	try {
		var vAppName = "" + app.fullName; // tell if it is ID
		if (vAppName.indexOf("InDesign") > -1) { vApp = "ID";}
		if (vAppName.indexOf("InCopy") > -1) { vApp = "IC";}
	} 
	catch (e) { vError = aMsg[[5,cLanguage]]; }
}
if (vApp == "") {
	vAppName = app.Name;
	if (vAppName.indexOf("FrameMaker") > -1) { 
		vApp = "FM"; var vDocRef = app.ActiveDoc;
	}
}
if (vApp == "") { vError = aMsg[[5,cLanguage]]; } 


// Step 0b: Detection of the language of the app
cLanguage = -1;
if ((vApp == "ID") | (vApp == "IC")) { 
	var vIndLanguage = "" + app.locale;
	if (vIndLanguage == "1279477613") { cLanguage = 1; }  // detect German by code '1279477613'
	else { cLanguage = 0; }
}
if ((vApp == "AI") | (vApp == "PS") | (vApp == "BR")) {
	if (app.locale == "de_DE")  { cLanguage = 1; }  // detect German
	else { cLanguage = 0; }
}
if (vApp == "FM") {
	if (app.Language == 22) { cLanguage = 1; }  // detect German by code '22'
	else { cLanguage = 0; }
}
// or setting by user – for English ( = 0 ) or German ( = 1 )
// than just delete the double slash in the next line
// cLanguage = 0; 


// Step 0c: Read or write the JSON file in folder 'documents'
if (vApp == "AI") { 
	vResult = fReadJSON(cFilenameJSONai); 
	var vVersion = parseInt(app.version);
	var aAiEXT = cAiEXT.split(",");
	if (vVersion > 25) { aAiEXT.pop(); }
}
if (vApp == "PS") { vResult = fReadJSON(cFilenameJSONps); var aPsEXT = cPsEXT.split(","); }
if (vApp == "ID") { vResult = fReadJSON(cFilenameJSONid); var aIdEXT = cIdEXT.split(",");}
if (vApp == "IC") { vResult = fReadJSON(cFilenameJSONic); var aIcEXT = cIcEXT.split(",");}
if (vApp == "FM") { vResult = fReadJSON(cFilenameJSONfm); var aFmEXT = cFmEXT.split(",");}


// Step 0d: Check if work file is saved
vError = fCheckIfSaved();
if (vError == aMsg[[3,cLanguage]]) { // Dialog for save the work file
	var vResult = confirm (aMsg[[3,cLanguage]]);
	if (vResult == true) {
		if (vApp == "FM") { 
			var vFile = app.ActiveDoc.SimpleSave("",true); // <FM> save dialog in FM 
			vFileName = vFile.Name;
			if (vFileName == null) { vError = aMsg[[8,cLanguage]]; } // Abboirt by user
		}
		else { vFile = File.saveDialog(aMsg[[7,cLanguage]]); }
		if (vFile != null) {
			var vFileName = ""+ vFile;
			var vPosID = vFileName.lastIndexOf(".indd");
			var vPosIC = vFileName.lastIndexOf(".icml");
			var vPosFM = vFileName.lastIndexOf(".fm");
			if (vApp == "AI") {app.activeDocument.saveAs(vFile); }
			if (vApp == "PS") {app.activeDocument.saveAs(vFile); }
			if (vApp == "ID") { if (vPosID == -1) {vFile = vFile + ".indd";} app.activeDocument.save(new File(vFile)); }
			if (vApp == "IC") { if (vPosIC == -1) {vFile = vFile + ".icml";} app.activeDocument.save(new File(vFile)); }
			if (vApp == "FM") { } // <FM> file is saved with app.ActiveDoc.SimpleSave, see above
			if (vApp == "FM") {vDocRef = 	app.ActiveDoc; } else { vDocRef = app.activeDocument; }
			vError = fCheckIfSaved();
		}
	else {vError = aMsg[[8,cLanguage]]; }
	}
	else {vError = aMsg[[8,cLanguage]]; }
}


// Step 0d: Show dialog for the javascript in AI, PS, ID or IC, if there is no folder
if (vError == ""){
	if (fFolderExists() == false) {
		var vJOold = JO; // save the old JO before dialog
		var vInput1, vInput2, vInput3, vInput4, vInput5, vInput6, vInput7, vInput8, vInput9, vInput10;
		if (vApp == "AI") { vResult = fDialog(); }
		if (vApp == "PS") { vResult = fDialog(); }
		if ((vApp == "ID") | (vApp == "IC")){ vResult = fDialog(); }
		if (vApp == "FM") { vResult = fDialog(); }
		if (vResult != 1) { vError = aMsg[[53,cLanguage]]; JO.uiShowDialog = true; JO = vJOold; } // abbort by user
		if (vError == "") { // use the user input
			JO.uiDigits = parseInt(vInput1.selection)+2; // +2 because of array [2,3,4,5,6,7,8,9]
			if (isNaN(parseInt(vInput2.text))) {JO.uiInitialValue = vJOold.uiInitialValue} 
			else {JO.uiInitialValue = parseInt(vInput2.text);}
			if (!isNaN(parseInt(vInput3.text))) {JO.uiNumSeparator = vJOold.uiNumSeparator} 
			else {JO.uiNumSeparator = vInput3.text;}	
			JO.uiShowDateTime = vInput4.value;
			if (vApp != "FM") { JO.uiSound = vInput5.value; } else { JO.uiSound = false; } // no beep in FrameMaker
			JO.uiCopyEXT = String(vInput7.selection);
			if (vInput8.text == aMsg[[72,cLanguage]]) {vInput8.text = fDocRefPath();} 
			if (!isNaN(parseInt(vInput8.text))) {JO.uiCopyPath = vJOold.uiCopyPath} 
			else {JO.uiCopyPath = vInput8.text;}
			JO.uiSaveOnlyChanged = vInput9.value;
			vSaveOnlyChanged = vInput9.value;
			if (JO.uiCopyPath == "") {JO.uiCopyPath = vWorkPath;}
			if (vApp == "AI") {JO.uiTextOutlined = vInput10.value; }
		}
	}
}
if (vError == "") { // no abbort by user
	if (vApp == "AI") { vResult = fWriteJSON(cFilenameJSONai); } // save JO as JSON in documents
	if (vApp == "PS") { vResult = fWriteJSON(cFilenameJSONps); }
	if (vApp == "ID") { vResult = fWriteJSON(cFilenameJSONid); }
	if (vApp == "IC") { vResult = fWriteJSON(cFilenameJSONic); }
	if (vApp == "FM") { vResult = fWriteJSON(cFilenameJSONfm); }
	if (JO.uiShowDialog == false) { fCreateFolder(); } // create folder and hide dialog
	if (JO.uiDigits < 2) {JO.uiDigits = 2;} // At least 2 positions are necessary
	if (JO.uiNumSeparator == "") {JO.uiNumSeparator = "-";}
	if (JO.uiDigits > 1) { vMax = fAddZeros(JO.uiDigits-1, 9, 9); } // create maximal counter to check it
}


// Step 01: Get all file names from the path
if (vError == "") {
	if (vApp == "FM") { var vName = fFullNameFM(); }
	else { var vName = vDocRef.name; }
	vPos = vName.lastIndexOf("."); // find dot before extension
	vName = vName.substring(0, vPos); // delete extension
	try { 
		var vPath = vWorkPath; 
		if (vApp == "FM") { var vFullName = fFullNameFM(); } // <FM>
		else { var vFullName = vPath + vSeparator + vDocRef.name; }
		if (JO.uiCopyPath != "") { vCopyPath = JO.uiCopyPath; } else { vCopyPath = vPath; } // check folder of copy
		var folderObj = new Folder(vCopyPath);
		if ( folderObj.exists == false) {folderObj = new Folder(vPath); JO.uiCopyPath = "";} // fallback if folder was deleted
		var vFiles = ""+ folderObj.getFiles(); // trick to make it a string
	}
	catch(e) {vError = aMsg[[3,cLanguage]];} 
}


// Step 01a: Check, if work file has an extention
if (vError == "") {
	if (vApp == "FM") {
		var vPos = vDocRef.Name.lastIndexOf("."); 
		var vExtention = vDocRef.Name.substring(vPos+1); 
	}
	else {
		var vPos = vDocRef.name.lastIndexOf("."); 
		var vExtention = vDocRef.name.substring(vPos+1); 
	}
	if (vApp == "AI") { if (aAiEXT.indexOf(vExtention) < 0 ) { vError = aMsg[[4,cLanguage]]; } app.preferences.setBooleanPreference("ShowExternalJSXWarning",false); }
	if (vApp == "PS") { if (aPsEXT.indexOf(vExtention) < 0 ) { vError = aMsg[[4,cLanguage]]; } }
	if (vApp == "ID") { if (aIdEXT.indexOf(vExtention) < 0 ) { vError = aMsg[[4,cLanguage]]; } }
	if (vApp == "IC") { if (aIcEXT.indexOf(vExtention) < 0 ) { vError = aMsg[[4,cLanguage]]; } }
	if (vApp == "FM") { if (aFmEXT.indexOf(vExtention) < 0 ) { vError = aMsg[[4,cLanguage]]; } }
}


// Step 02: Delete all file names which does not fit
if (vError == "") {
	if (vCopyPath == "") { vCopyPath = vWorkPath; }
	var vRegExp = new RegExp(vCopyPath+vSeparator, "g"); // how to replace the path
	vFiles = vFiles.replace(vRegExp, ""); // ... with nothing
	aFiles = vFiles.split(","); // create new array
	var vLen = aFiles.length; // count the elements of the array
	var vNewFiles = "";
	vCounter = 0;
	for (var i = 0; i < vLen; i++) {
			var vFileName = aFiles[i];
			vPos = vFileName.lastIndexOf(JO.uiNumSeparator);
			if (vPos > 0) { vFileName = vFileName.substring(0,vPos); }
			if (vApp == "FM") {
				vPos = vName.lastIndexOf(vSeparator);
				vName = vName.substr(vPos+1);
			}
			if (vFileName == vName) { 
				if ((vApp == "ID") | (vApp == "IC")) { vNewFiles = aFiles[i] + ","+ vNewFiles; } // for ID and IC only
				else { vNewFiles = vNewFiles + "," + aFiles[i]; } // for PS and AI
			}
	}
	vFiles = vNewFiles;
	if ((vApp == "ID") | (vApp == "IC")) { // for ID and IC only: delete comma, if its the last char.
		var vLen = vFiles.length - 1;
		if (vFiles.lastIndexOf(",") == vLen) {vFiles = vFiles.substring(0,vLen - 1); } 
		aFiles = vFiles.split(","); // create new array
		aFiles = aFiles.sort(); // sort filename for InDesign or InCopy
		vFiles = aFiles[0];
		for (var i = 1; i < aFiles.length; i++) { vFiles = vFiles + "," + aFiles[i]; }
	}
}
	
// Step 03: Find the latest file name
if (vError == "") {
	vPos = vFiles.indexOf(vFullName);
	if (vPos > 0) { vComma = ","; } else { vComma = ""; }
	vFiles = vFiles.replace(vComma + vFullName, ""); // delete name of document
	vPos = vFiles.lastIndexOf(",");
	if (vPos > 0) { vPos++; } // delete comma above as well
	var vLastFile = vFiles.substring(vPos, vFiles.length);
	vPos = vLastFile.lastIndexOf(vSeparator); // delete filess
	if (vPos > 0) { vPos++; } // delete separator above as well
	vLastFile = vLastFile.substring(vPos, vLastFile.length); // delete path
	vPos = vLastFile.lastIndexOf("."); // find dot before extension
	if (vPos > -1) { var vLastFile = vLastFile.substring(0, vPos); } // delete extension
}
	
// Step 04: Get the number and increase by 1
if (vError == "") {
	if (JO.uiShowDateTime == false) { // show Counter
		vPos = vLastFile.lastIndexOf(JO.uiNumSeparator);
		if (vPos > 0) { var vCounter = vLastFile.substring(vPos+1, vLastFile.length); } // extract the number
		else { vCounter = JO.uiInitialValue - 1; } // set start value from UI
		if (! isNaN(vCounter)) { vCounter = parseInt(vCounter, 10) + 1; }
		if (vCounter < (JO.uiInitialValue)) { vCounter = JO.uiInitialValue; }
		vCounter = fAddZeros (JO.uiDigits, vCounter, 0); 
		if (vCounter == vMax) { vError = aMsg[[1,cLanguage]] + JO.uiDigits + aMsg[[2,cLanguage]]; } // stop, if maximum is reached
	}
	else { // show Date and Time
		var vNow = new Date();
		var vNowDate = vNow.getFullYear() + JO.uiNumSeparator + (fBi(vNow.getMonth()+1)) + JO.uiNumSeparator + fBi(vNow.getDate());
		var vNowTime =fBi(vNow.getHours()) + JO.uiNumSeparator + fBi(vNow.getMinutes()) + JO.uiNumSeparator + fBi(vNow.getSeconds());
		vCounter = vNowDate + JO.uiNumSeparator + vNowTime;
	}
}
	
// Step 05: 
if (vError == "") {
		if (vApp == "FM") {
			var vPosExt = vDocRef.Name.lastIndexOf("."); 
			var vWorkEXT = vDocRef.Name.substring(vPosExt+1,vDocRef.Name.length);
		}
		else {
			var vPosExt = vDocRef.name.lastIndexOf("."); 
			var vWorkEXT = vDocRef.name.substring(vPosExt+1,vDocRef.name.length);
		}
		var vWorkPath = fDocRefPath();
		if (vApp == "FM") { vPathOld = vWorkPath; } // <FM>
		else { var vPathOld = vWorkPath + vSeparator + vName + "." + vWorkEXT; } // working file
		if (JO.uiCopyEXT == "") {vCopyEXT = vWorkEXT.toLowerCase(); } else { vCopyEXT = JO.uiCopyEXT; }
		if (vApp != "FM") {
			vPath = vPath + vSeparator + vName + JO.uiNumSeparator + vCounter + "." + vCopyEXT; // copy of working file
			if (JO.uiCopyPath != "") { vPath = JO.uiCopyPath + vSeparator + vName + JO.uiNumSeparator + vCounter + "." +vCopyEXT; }
		}
		else {
			vPath = vDocRef.Name; // FrameMaker needs an other Path with'\' 
			vPos = vPath.lastIndexOf("."); vPathOnly = vPath.substring(0,vPos);
			vSeparator = String.fromCharCode(92); // Windows '\'
			vPos = vPathOnly.lastIndexOf(vSeparator); vPathOnly = vPathOnly.substring(0,vPos);
			vName = vDocRef.Name; 
			vPos = vName.lastIndexOf("."); vName = vName.substring(0,vPos);
			vPos = vName.lastIndexOf(vSeparator); vName = vName.substr(vPos+1);
			vPath = vPathOnly + vSeparator + vName + JO.uiNumSeparator + vCounter + "." + vCopyEXT; // copy of working file
			vPathOld = vPathOnly + vSeparator + vName  + "." + vCopyEXT; // working file
//			if (JO.uiCopyPath != "") { vPath = JO.uiCopyPath + vSeparator + vName + JO.uiNumSeparator + vCounter + "." +vCopyEXT; } // <FM>
		}
		try { 
			if (vApp == "PS") { // for Photoshop
				if ((vDocRef.saved == true) || (vSaveOnlyChanged == true)) { savePS(vPath, vCopyEXT); } // new in 2.7.3
				else {
					if (vCopyEXT != vWorkEXT) { 
					savePS(vPath, vCopyEXT); savePS(vPathOld, vWorkEXT); } // saving two times will be slower.
					else { savePS(vPathOld, vWorkEXT); var fileObj = new File(vPathOld); var vResult = fileObj.copy(vPath); } // faster by saving one time.
					}
				}
			if (vApp == "AI") { // for Illustrator
				if ((vDocRef.saved == true) & (vSaveOnlyChanged == true))
					{ vDocRefCopy = vDocRef; saveAI(vPath, vCopyEXT); app.open(File(vPathOld)); vDocRefCopy.close(); } // unpleasant!!
				else {			
					if (vCopyEXT != vWorkEXT) { saveAI(vPath, vCopyEXT); saveAI(vPathOld, vWorkEXT); } // saving two times will be slower.
					else { saveAI(vPathOld, vWorkEXT); var fileObj = new File(vPathOld); var vResult = fileObj.copy(vPath); } // faster by saving one time.
				} 
			}
			if (vApp == "ID") { // for InDesign
				if ((vDocRef.saved == true) & (vSaveOnlyChanged == true)) { vDocRefCopy = vDocRef; saveID(vPath, vCopyEXT); 
					if (vCopyEXT == "indd") {app.open(File(vPathOld)); vDocRefCopy.close();} } // unpleasant!!
				else {
					if (vCopyEXT != vWorkEXT) { saveID(vPath, vCopyEXT); saveID(vPathOld, vWorkEXT); } // saving two times will be slower.
					else { saveID(vPathOld, vWorkEXT); var fileObj = new File(vPathOld); var vResult = fileObj.copy(vPath); } // faster by saving one time.
				}
			}
			if (vApp == "IC") { // for InCopy
				if ((vDocRef.saved == true) & (vSaveOnlyChanged == true)) { vDocRefCopy = vDocRef; saveIC(vPath, vCopyEXT); 
					if (vCopyEXT == "icml") {app.open(File(vPathOld)); vDocRefCopy.close();} } // unpleasant!!
				else {
					if (vCopyEXT != vWorkEXT) { saveIC(vPath, vCopyEXT); saveIC(vPathOld, vWorkEXT); } // saving two times will be slower.
					else { saveIC(vPathOld, vWorkEXT); var fileObj = new File(vPathOld); var vResult = fileObj.copy(vPath); } // faster by saving one time.
				}
			}
			if (vApp == "FM") { // for FrameMaker
				if ((vDocRef.saved == true) & (vSaveOnlyChanged == true)) { vDocRefCopy = vDocRef; saveFM(vPath, vCopyEXT); 
					if (vCopyEXT == "fm") {app.open(File(vPathOld)); vDocRefCopy.close();} } // unpleasant!!
				else {
					if (vCopyEXT != vWorkEXT) { saveFM(vPath, vCopyEXT); saveFM(vPathOld, vWorkEXT); } // saving two times will be slower.
					else { saveFM(vPathOld, vWorkEXT); var fileObj = new File(vPathOld); var vResult = fileObj.copy(vPath); } // faster by saving one time.
				}
			}


		}
		catch(e) { if (vApp != "ID") { vError = aMsg[[0,cLanguage]]; alert( e); } }
		if ((vApp == "ID") | (vApp == "IC")) { if (app.activeDocument.saved == false) {vError = aMsg[[0,cLanguage]]; } }
		if (JO.uiSound == true) { if (vApp != "FM") { beep(); } }
}
if (vError != "") {alert (vError); } // feedback
// end of script

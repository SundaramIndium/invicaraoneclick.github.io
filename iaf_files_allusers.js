let files = {
    async loadFileAttributes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let proj = await PlatformApi.IafProj.getCurrent(ctx)

        let fileAttributesList = await PlatformApi.IafScriptEngine.getItems({
            query: {},
            collectionDesc: {
                _userType: 'iaf_cde_file_attrib_coll',
                _namespaces: proj._namespaces
            }
        }, ctx)

        console.log('fileAttributes', fileAttributesList)
        let fieldAttribVals = fileAttributesList ? fileAttributesList[0] : {}
        PlatformApi.IafScriptEngine.setVar('iaf_ext_fileAttributes', fieldAttribVals)
        PlatformApi.IafScriptEngine.setVar('iaf_attributeDisplayNames', [
            { prop: "documentCode", dName: "Document code" },
            { prop: "drawingType", dName: "Drawing Type" },
            { prop: "discipline", dName: "Discipline" },
            { prop: "component", dName: "Component" },
            { prop: "contractor", dName: "Contractor" },
            { prop: "drawingStage", dName: "Drawing Stage" },
            { prop: "location", dName: "Location" },
            { prop: "package", dName: "Package" },
            { prop: "handoverType", dName: "Handover Type" },
            { prop: "system", dName: "System" },
            { prop: "systemName", dName: "System Name" },
            { prop: "handoverPackNumber", dName: "Handover Pack Number" },
            { prop: "stage", dName: "Stage" },
            { prop: "documentType", dName: "Document Type" },
            { prop: "description", dName: "Description" },
            { prop: "fileType", dName: "File Type" },
            { prop: "subLocation", dName: "Sub Location" },
            { prop: "spec", dName: "Spec" },
            { prop: "size", dName: "Size" },
            { prop: "fluidType", dName: "Fluid Type" },
            { prop: "transmittalNo", dName: "Transmittal No" },
            { prop: "drawingDiscipline", dName: "Drawing Discipline" },
            { prop: "drawingSubType", dName: "Drawing Sub Type" },
            { prop: "revision", dName: "Revision" },
            { prop: "trackedDrawing", dName: "Tracked Drawing" },
        ])
    },

    async getDocumentCodes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctCodes = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.documentCode",
            query: {}
        }, ctx)
        console.log(distinctCodes, "distinctCodes")
        let distinctCodesFilter = distinctCodes.filter(attval => attval != "")
        console.log(distinctCodesFilter, "distinctCodesFilter")
        let distinctCodesSorted = _.sortBy(distinctCodesFilter, a => a)
        console.log(distinctCodesSorted, "distinctCodesSorted")
        let scriptValues = { "Document Code": distinctCodesSorted }
        return scriptValues
    },


    async getDrawingTypes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Drawing Type": iaf_ext_fileAttributes.drawingType }
        return scriptValues
    },
    async getDisciplines(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Discipline: iaf_ext_fileAttributes.discipline }
        return scriptValues
    },
    async getComponents(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Component: iaf_ext_fileAttributes.component }
        return scriptValues
    },

    async getContractors(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Contractor: iaf_ext_fileAttributes.contractor }
        return scriptValues
    },

    async getDrawingStages(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Drawing Stage": iaf_ext_fileAttributes.drawingStage }
        return scriptValues
    },
    async getLocations(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Location: iaf_ext_fileAttributes.location }
        return scriptValues
    },
    async getPackages(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Package: iaf_ext_fileAttributes.package }
        return scriptValues
    },
    async getHandoverTypes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Handover Type": iaf_ext_fileAttributes.handoverType }
        return scriptValues
    },
    async getSystems(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { System: iaf_ext_fileAttributes.system }
        return scriptValues
    },
    async getSystemsNames(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "System Name": iaf_ext_fileAttributes.systemName }
        return scriptValues
    },
    async getHandoverPackNumbers(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctPackNumbers = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.handoverPackNumber",
            query: {}
        }, ctx)
        console.log(distinctPackNumbers, "distinctPackNumbers")

        distinctPackNumbers = distinctPackNumbers.filter(attval => attval != "")
        console.log(distinctPackNumbers, "distinctPackNumbers after filter")

        distinctPackNumbers = _.sortBy(distinctPackNumbers, a => a)
        console.log(distinctPackNumbers, "distinctPackNumbers after sorted")
        let scriptValues = {
            "Handover Pack Number": distinctPackNumbers
        }
        return scriptValues
    },
    async getStages(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Stage: iaf_ext_fileAttributes.stage }
        return scriptValues
    },
    async getDocumentTypes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Document Type": iaf_ext_fileAttributes.documentType }
        return scriptValues
    },

    async getDescriptions(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctContacts = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.description",
            query: {}
        }, ctx)
        let distinctContactsFilter = distinctContacts.filter(attval => attval != "")
        let distinctContactsSorted = _.sortBy(distinctContactsFilter, a => a)
        let scriptValues = { Description: distinctContactsSorted }
        return scriptValues
    },
    async getFileTypes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "File Type": iaf_ext_fileAttributes.fileType }
        return scriptValues
    },
    async getSubLocations(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Sub Location": iaf_ext_fileAttributes.subLocation }
        return scriptValues
    },
    async getSpecs(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Spec: iaf_ext_fileAttributes.spec }
        return scriptValues
    },
    async getSizes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { Size: iaf_ext_fileAttributes.size }
        return scriptValues
    },
    async getFluidTypes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Fluid Type": iaf_ext_fileAttributes.fluidType }
        return scriptValues
    },
    async getTransmittalNos(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctContacts = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.transmittalNo",
            query: {}
        }, ctx)
        let distinctContactsFilter = distinctContacts.filter(attval => attval != "")
        let distinctContactsSorted = _.sortBy(distinctContactsFilter, a => a)
        let scriptValues = { "Transmittal No": distinctContactsSorted }
        return scriptValues
    },
    async getDrawingDisciplines(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Drawing Discipline": iaf_ext_fileAttributes.drawingDiscipline }
        return scriptValues
    },
    async getDrawingSubTypes(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Drawing Sub Type": iaf_ext_fileAttributes.drawingSubType }
        return scriptValues
    },
    async getRevisions(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctRevision = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.revision",
            query: {}
        }, ctx)

        distinctRevision = distinctRevision.filter(attval => attval != "")

        distinctRevision = _.sortBy(distinctRevision, a => a)

        let scriptValues = { Revision: distinctRevision }
        return scriptValues
    },

    async getTrackedDrawing(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_fileAttributes = await PlatformApi.IafScriptEngine.getVar('iaf_ext_fileAttributes')
        let scriptValues = { "Tracked Drawing": iaf_ext_fileAttributes.trackedDrawing }
        return scriptValues
    },

    async getCategoryOfFiles(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctFileCategories = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.dtCategory",
            query: {}
        }, ctx)
        console.log('distinctFileCategories', distinctFileCategories)
        let sortedCategories = _.sortBy(distinctFileCategories, name => name)
        return sortedCategories
    },
    async getTypesOfFilesForCategory(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')

        console.log('getCategoryOfFiles INPUT', input)
        let distinctFileTypes = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: 'fileAttributes.dtType',
            query: { 'fileAttributes.dtCategory': input.dtCategory }
        }, ctx)
        let sortedTypes = _.sortBy(distinctFileTypes, rev => rev.name)
        return sortedTypes
    },
    async getFileAttributeSelects(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        console.log("iaf_ext_files_coll", iaf_ext_files_coll)
        let distinctHandoverTypes = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.handoverType",
            query: {}
        }, ctx)
        console.log('distinctHandoverTypes', distinctHandoverTypes)

        distinctHandoverTypes = distinctHandoverTypes.filter(attval => attval != '')

        console.log('distinctHandoverTypes2', distinctHandoverTypes)

        distinctHandoverTypes = _.sortBy(distinctHandoverTypes, a => a)
        console.log('distinctHandoverTypes3', distinctHandoverTypes)

        let distinctDocTypes = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.documentType",
            query: {}
        }, ctx)
        console.log('distinctDocTypes', distinctDocTypes)

        distinctDocTypes = distinctDocTypes.filter(attval => attval != '')
        console.log('distinctDocTypes2', distinctDocTypes)


        distinctDocTypes = _.sortBy(distinctDocTypes, a => a)
        console.log('distinctDocTypes3', distinctDocTypes)


        let scriptedSelectProps = {
            "Handover Type": distinctHandoverTypes,
            "Document Type": distinctDocTypes
        }
        return scriptedSelectProps
    },
    async getFileAttributePropSelects(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        console.log("iaf_ext_files_coll", iaf_ext_files_coll)

        let distinctDisciplines = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.discipline",
            query: {}
        }, ctx)
        console.log('distinctDisciplines', distinctDisciplines)

        distinctDisciplines = distinctDisciplines.filter(attval => attval != "")

        console.log('distinctDisciplines2', distinctDisciplines)

        distinctDisciplines = _.sortBy(distinctDisciplines, a => a)
        console.log('distinctDisciplines3', distinctDisciplines)

        let distinctComponents = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.component",
            query: {}
        }, ctx)
        console.log('distinctComponents', distinctComponents)

        distinctComponents = distinctComponents.filter(attval => attval != "")
        console.log('distinctComponents2', distinctComponents)


        distinctComponents = _.sortBy(distinctComponents, a => a)
        console.log('distinctComponents3', distinctComponents)


        let scriptedSelectProps = {
            Discipline: distinctDisciplines,
            Component: distinctComponents,
        }
        return scriptedSelectProps
    },
    async getFileSystemSelects(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let distinctSystems = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: { _userType: iaf_ext_files_coll._userType, _id: iaf_ext_files_coll._id },
            field: "fileAttributes.system",
            query: {}
        }, ctx)

        distinctSystems = distinctSystems.filter(attval => attval != "")

        distinctSystems = _.sortBy(distinctSystems, a => a)

        let scriptValues = { "EIDA System Code": distinctSystems }
        return scriptValues
    },
    async getFiles(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let fileItems = await PlatformApi.IafScriptEngine.getFileItems(
            {
                collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                query: input.entityInfo,
                options: { page: { getAllItems: true } }
            }, ctx
        )
        console.log('fileItems', fileItems)

        let propDispNames = PlatformApi.IafScriptEngine.getVar('iaf_attributeDisplayNames')
        console.log(propDispNames, "propDispNames")

        let filesAsEntities = fileItems.map(file => {
            let filePropNamesOrig = Object.keys(file.fileAttributes)
            console.log(filePropNamesOrig, "filePropNamesOrig")
            let fileProps = {}
            for (let i = 0; i < filePropNamesOrig.length; i++) {
                let filePropInfo = _.find(propDispNames, { prop: filePropNamesOrig[i] })
                console.log(filePropInfo, "filePropInfo", filePropInfo?.dName)
                if (filePropInfo?.dName) {
                    fileProps[filePropInfo.dName] = {
                        dName: filePropInfo.dName,
                        type: filePropNamesOrig[i] === 'dtCategory' || filePropNamesOrig[i] === 'dtType' ? '<HIERARCHY>' : 'text',
                        val: file.fileAttributes[filePropNamesOrig[i]] || null
                    }
                }
            }

            return {
                _id: file._id,
                _fileId: file._fileId,
                ...file,
                "Entity Name": file.name,
                properties: fileProps
            }
        })
        console.log('fileAsEntities', filesAsEntities)
        return filesAsEntities
    },

    async getDrawings(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let fileItems = await PlatformApi.IafScriptEngine.getFileItems(
            {
                collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                query: input.entityInfo,
                options: { page: { getAllItems: true } }
            }, ctx
        )
        console.log('fileItems', fileItems)

        let propDispNames = PlatformApi.IafScriptEngine.getVar('iaf_attributeDisplayNames')
        console.log(propDispNames, "propDispNames")

        let filesAsEntities = fileItems.map(file => {
            let filePropNamesOrig = Object.keys(file.fileAttributes)
            console.log(filePropNamesOrig, "filePropNamesOrig")
            let fileProps = {}
            for (let i = 0; i < filePropNamesOrig.length; i++) {
                let filePropInfo = _.find(propDispNames, { prop: filePropNamesOrig[i] })
                console.log(filePropInfo, "filePropInfo", filePropInfo?.dName)
                if (filePropInfo?.dName) {
                    fileProps[filePropInfo.dName] = {
                        dName: filePropInfo.dName,
                        type: filePropNamesOrig[i] === 'dtCategory' || filePropNamesOrig[i] === 'dtType' ? '<HIERARCHY>' : 'text',
                        val: file.fileAttributes[filePropNamesOrig[i]] || null
                    }
                }
            }

            return {
                _id: file._id,
                _fileId: file._fileId,
                ...file,
                "Entity Name": file.name,
                properties: fileProps
            }
        })
        console.log('fileAsEntities', filesAsEntities)
        return filesAsEntities
    },

    async getAssetsForFile(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        console.log('getAssetsForFile INPUT', input)
        let assetQuery = [{
            parent: {
                query: { _id: input.entityInfo._id },
                collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                options: { page: { getAllItems: true } },
                sort: { _id: 1 }
            },
            related: [
                {
                    relatedDesc: { _relatedUserType: iaf_asset_collection._userType, _isInverse: true },
                    as: 'AssetInfo'
                }
            ]
        }]
        let queryResults = await PlatformApi.IafScriptEngine.findWithRelatedMulti(assetQuery, ctx)
        let assets = queryResults[0]._list[0].AssetInfo._list
        let assetForTheFile
        let finalAssetForTheFile
        let header = [["Asset Name", "Type MarK", "ItemGUID"]]
        if (assets.length > 0) {
            assetForTheFile = assets.map(asset => [
                asset['Asset Name'],
                asset.properties["Type Mark"].val,
                asset.properties.ItemGUID.val,
            ])
            finalAssetForTheFile = header.concat(assetForTheFile)
        } else {
            finalAssetForTheFile = []
        }
        return finalAssetForTheFile
    },
    async getSpacesForFile(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let iaf_space_collection = await PlatformApi.IafScriptEngine.getVar('iaf_space_collection')
        console.log('getSpacesForFile input', input)
        let spaceQuery = [{
            parent: {
                query: { _id: input.entityInfo._id },
                collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                options: { page: { getAllItems: true } },
                sort: { _id: 1 }
            },
            related: [
                {
                    relatedDesc: { _relatedUserType: iaf_space_collection._userType, _isInverse: true },
                    as: 'SpaceInfo',
                }
            ]
        }]
        let queryResults = await PlatformApi.IafScriptEngine.findWithRelatedMulti(spaceQuery, ctx)
        let spaces = queryResults[0]._list[0].SpaceInfo._list
        let spaceForTheFile
        let finalSpaceForTheFile
        let header = ["Space Name", "Room Number", "Room Type"]
        if (spaces.length > 0) {
            spaceForTheFile = spaces.map(space => [
                space['Space Name'],
                space.properties['Room Number'].val,
                space.properties['Room Type'].val
            ])
            finalSpaceForTheFile = header.concat(spaceForTheFile)
        } else {
            finalSpaceForTheFile = []
        }
        return finalSpaceForTheFile
    },

    async editFile(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let iaf_attributeDisplayNames = await PlatformApi.IafScriptEngine.getVar('iaf_attributeDisplayNames')
        console.log("iaf_attributeDisplayNames", iaf_attributeDisplayNames)
        let IAF_workspace = await PlatformApi.IafScriptEngine.getVar('IAF_workspace')

        let propNames = Object.values(input.entityInfo.new.properties)
        console.log("propNames", propNames)

        let propArrays = []

        propArrays = propNames.map(propInfo => {
            let tempArray = []
            iaf_attributeDisplayNames.forEach(att => {
                if (att.dName === propInfo.dName) {
                    tempArray.push(att.prop, propInfo.val)
                }
            });
            return tempArray
        })


        console.log("propArrays", JSON.stringify(propArrays))

        function arr2obj(arr) {

            let obj = {};
            arr.forEach((v) => {


                let key = v[0];
                let value = v[1];

                obj[key] = value;
            });


            return obj;
        }

        arr2obj(propArrays)
        console.log(arr2obj(propArrays), "arr2obj(propArrays)")
        console.log("propArrays", JSON.stringify(propArrays))


        let updatedFileItem = [{
            _id: input.entityInfo.new._id,
            name: input.entityInfo.new.name,
            fileAttributes: Object.assign(arr2obj(propArrays)),
            _fileId: input.entityInfo.new._fileId,
            containerPath: input.entityInfo.new.containerPath,
            nextVersionNumber: input.entityInfo.new.nextVersionNumber,
            tipVersionNumber: input.entityInfo.new.tipVersionNumber,
            versions: input.entityInfo.new.version
        }]
        let updateItemResult = await PlatformApi.IafScriptEngine.updateItemsBulk({
            _userItemId: iaf_ext_files_coll._userItemId,
            _namespaces: IAF_workspace._namespaces,
            items: updatedFileItem
        }, ctx);
        let res
        if (updateItemResult[0][0] === "ok: 204") {
            res = {
                success: true,
                result: "$updateItemResult[0][0]"
            }
        } else {
            res = {
                success: false,
                message: "Error updating File!"
            }
        }
        return res
    },
    async preprocessUploadFiles(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        console.log('input', input)
        let fileQueries = input.files.map(file => {
            return {
                query: { name: file.name },
                _userItemId: iaf_ext_files_coll._userItemId,
                options: { page: { getAllItems: true } }
            }
        })
        console.log('fileQueries', fileQueries)
        let fileItems = await PlatformApi.IafScriptEngine.getItemsMulti(fileQueries, ctx)
        fileItems = _.flatten(fileItems)
        console.log('fileItems', fileItems)
        let accepted = input.files.map(file => {
            let fileFound = _.find(fileItems, { name: file.name })
            if (fileFound) {
                file.fileItem = { fileAttributes: fileFound.fileAttributes }
            } else {
                file.fileItem = { fileAttributes: {} }
            }
            console.log('file', file)
            return file
        })
        console.log('accepted', accepted)
        return { accepted: accepted }
    },
    async postprocessUploadFiles(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let IAF_workspace = await PlatformApi.IafScriptEngine.getVar('IAF_workspace')
        console.log(IAF_workspace, "IAF_workspace===>")
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let iaf_entityCollectionMap = await PlatformApi.IafScriptEngine.getVar('iaf_entityCollectionMap')
        let entityCollection = iaf_entityCollectionMap[input.entityType]
        let relatedItems = input.entities.map(ent => {
            return {
                parentItem: ent,
                relatedItems: input.fileItems
            }
        })
        let relationsResult = await PlatformApi.IafScriptEngine.createRelations({
            parentUserItemId: entityCollection._userItemId,
            _userItemId: iaf_ext_files_coll._userItemId,
            _namespaces: IAF_workspace._namespaces,
            relations: relatedItems
        }, ctx);
        return { success: true }
    },
    async deleteDocument(input, libraries, ctx) {
        let { PlatformApi } = libraries
        let res = {
            success: true,
            message: "",
            result: []
        }

        console.log("input.entityInfo.original", input.entityInfo.original)

        let deleteDocumentArray = [input.entityInfo.original._id]

        console.log("delete document array", deleteDocumentArray)

        // need to fix 
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')

        try {
            let deleteResult = await PlatformApi.IafScriptEngine.deleteItems({
                _userItemId: iaf_ext_files_coll._userItemId,
                items: deleteDocumentArray
            }, ctx)
        }
        catch (e) {
            return { sucess: false, message: e.message }
        }

        return res
    },
    async getFileByDocumentTypes(input, libraries, ctx) {

        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')

        let tagArray = Object.keys(input.entityInfo)
        let tagNames = tagArray.map(name => {
            return _.split(name, '-')[2]
        })
        let fileItems = await PlatformApi.IafScriptEngine.getFileItems(
            {
                collectionDesc: {
                    _userType: iaf_ext_files_coll._userType,
                    _userItemId: iaf_ext_files_coll._userItemId
                },
                query: { "fileAttributes.documentType": { $in: tagNames } },
                options: { page: { getAllItems: true } }
            }, ctx)
        let propDispNames = PlatformApi.IafScriptEngine.getVar('iaf_attributeDisplayNames')
        let filesAsEntities = fileItems.map(file => {
            let filePropNamesOrig = Object.keys(file.fileAttributes)
            let fileProps = {}
            for (let i = 0; i < filePropNamesOrig.length; i++) {
                let filePropInfo = _.find(propDispNames, { prop: filePropNamesOrig[i] })
                if (filePropInfo?.dName) {
                    fileProps[filePropInfo.dName] = {
                        dName: filePropInfo.dName,
                        type: filePropNamesOrig[i] === 'dtCategory' || filePropNamesOrig[i] === 'dtType' ? '<HIERARCHY>' : 'text',
                        val: file.fileAttributes[filePropNamesOrig[i]] || null
                    }
                }
            }

            return {
                _id: file._id,
                _fileId: file._fileId,
                ...file,
                "Entity Name": file.name,
                properties: fileProps
            }
        })
        console.log('fileAsEntities', filesAsEntities)
        return filesAsEntities
    },
    async exportAllFileList(input, libraries, ctx) {
        let { PlatformApi, UiUtils } = libraries

        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        let fileItems = await PlatformApi.IafScriptEngine.getFileItems(
            {
                collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                options: { page: { getAllItems: true } }
            }, ctx
        )
        console.log('fileItems', fileItems)

        let reduced = fileItems.map(file => {
            return {
                Name: file.name,
                fileTags: Object.assign({}, file.fileAttributes)
            }
        })

        console.log("reduced1", reduced)


        reduced = reduced.map(data => {
            return {
                Name: data.Name,
                //fileTags: Object.entries(data.fileTags).map(([key, value]) => ({key,value}))
                fileTags: Object.entries(data.fileTags),
            }
        })

        console.log("reduced2", reduced)

        let arrayObject = reduced.map(list => {
            let arrayTags = list.fileTags.map(tags => {
                return { [tags[0]]: tags[1] }
            })
            return Object.assign({}, { "File Name": list["Name"] }, Object.assign(...arrayTags))
        })

        console.log("arrayObject", arrayObject)

        let sheetArrays = [{ sheetName: "File List", objects: arrayObject }]
        console.log('shetArrays', sheetArrays)

        let relationWorkbook = await UiUtils.IafDataPlugin.createWorkbookFromAoO(sheetArrays)
        console.log('relationWorkbook', relationWorkbook)

        let savedWorkbook = await UiUtils.IafDataPlugin.saveWorkbook(relationWorkbook, "File List Exported.xlsx");
        console.log('savedWorkbook', savedWorkbook)

    },
    async altGetFilesByDwgDiscipline(input, libraries, ctx) {
        console.log("input - altGetFilesByDwgDiscipline", input)
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')

        let tagArray = Object.keys(input.entityInfo)
        console.log("tagArray", tagArray)

        let disciplines = tagArray.filter(tag => {
            return _.split(tag, '-')[0] == "0"
        })
        console.log("disciplines", disciplines)

        let subTypes = tagArray.filter(tag => {
            return _.split(tag, '-')[0] == "1"
        })
        console.log("subTypes", subTypes)

        let discNames = _.map(disciplines, name => {
            return name.split('-').slice(2).join('-')
        })
        console.log("discNames", discNames)

        let typeNames = _.map(subTypes, name => {
            return name.split('-').slice(2).join('-')
        })
        console.log("typeNames", typeNames)

        let fileItems
        if (typeNames.length > 0) {
            fileItems = await PlatformApi.IafScriptEngine.getFileItems(
                {
                    query: { "fileAttributes.drawingDiscipline": { $in: discNames }, "fileAttributes.drawingSubType": { $in: typeNames } },
                    collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                    options: { page: { getAllItems: true } },
                }, ctx)
        }
        else {
            fileItems = await PlatformApi.IafScriptEngine.getFileItems(
                {
                    query: { "fileAttributes.drawingDiscipline": { $in: discNames } },
                    collectionDesc: { _userType: iaf_ext_files_coll._userType, _userItemId: iaf_ext_files_coll._userItemId },
                    options: { page: { getAllItems: true } },
                }, ctx)
        }
        let propDispNames = PlatformApi.IafScriptEngine.getVar('iaf_attributeDisplayNames')
        let filesAsEntities = fileItems.map(file => {
            let filePropNamesOrig = Object.keys(file.fileAttributes)
            let fileProps = {}
            for (let i = 0; i < filePropNamesOrig.length; i++) {
                let filePropInfo = _.find(propDispNames, { prop: filePropNamesOrig[i] })
                if (filePropInfo?.dName) {
                    fileProps[filePropInfo.dName] = {
                        dName: filePropInfo.dName,
                        type: filePropNamesOrig[i] === 'drawingDiscipline' || filePropNamesOrig[i] === 'drawingSubType' ? '<HIERARCHY>' : 'text',
                        val: file.fileAttributes[filePropNamesOrig[i]] || null
                    }
                }
            }

            return {
                _id: file._id,
                _fileId: file._fileId,
                ...file,
                "Entity Name": file.name,
                properties: fileProps
            }
        })
        console.log('fileAsEntities', filesAsEntities)
        return filesAsEntities
    },

    async getDwgDisciplinesTrackedWithCount(input, libraries, callback, ctx) {
        console.log("input - getDwgDisciplinesTrackedWithCount", input)
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        console.log("iaf_ext_files_coll", iaf_ext_files_coll)
        let distinctTypes = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: {
                _userType: iaf_ext_files_coll._userType,
                _id: iaf_ext_files_coll._id
            },
            field: "fileAttributes.drawingDiscipline",
            query: {
                "fileAttributes.trackedDrawing": "Yes"
            }
        }, ctx)
        console.log('distinctTypes', distinctTypes)

        distinctTypes = _.sortBy(distinctTypes, d => d)
        console.log(distinctTypes, "distinctTypesAfter sorting")

        // Need to check the objects
        let distinctTypeWithTypeCountQuery = distinctTypes.map(type => {
            return {
                _userItemId: iaf_ext_files_coll._id,
                query: {
                    "fileAttributes.drawingDiscipline": type,
                    "fileAttributes.trackedDrawing": "Yes"
                },
                options: { page: { _pageSize: 0, getPageInfo: true } }
            }
        })
        console.log('distinctTypes', distinctTypes)

        let typesPageInfo = await PlatformApi.IafScriptEngine.getItemsMulti(distinctTypeWithTypeCountQuery, ctx);
        console.log('typesPageInfo', typesPageInfo)

        let distinctTypesWithPageInfo = _.zip(distinctTypes, typesPageInfo)
        console.log('distinctTypesWithPageInfo', distinctTypesWithPageInfo)

        let distinctTypesWithChildrenCount = distinctTypesWithPageInfo.map(typeWithpage => {
            return {
                name: typeWithpage[0],
                childCount: typeWithpage[1]._total
            }
        })
        console.log('distinctTypesWithChildrenCount', distinctTypesWithChildrenCount)
        return distinctTypesWithChildrenCount
    },
    async getDwgSubTypesForDwgDisciplineTrackedWithCount(input, libraries, callback, ctx) {
        console.log("input - getDwgSubTypesForDwgDisciplineTrackedWithCount", input)
        let { PlatformApi } = libraries
        let iaf_ext_files_coll = await PlatformApi.IafScriptEngine.getVar('iaf_ext_files_coll')
        console.log("iaf_ext_files_coll", iaf_ext_files_coll)
        let distinctTypes = await PlatformApi.IafScriptEngine.getDistinct({
            collectionDesc: {
                _userType: iaf_ext_files_coll._userType,
                _id: iaf_ext_files_coll._id
            },
            field: "fileAttributes.drawingSubType",
            query: {
                "fileAttributes.drawingDiscipline": input.input["Drawing Discipline"],
                "fileAttributes.trackedDrawing": "Yes"
            }
        }, ctx)
        console.log('distinctTypes', distinctTypes)

        distinctTypes = _.sortBy(distinctTypes, d => d)
        console.log(distinctTypes, "distinctTypesAfter sorting")

        // Need to check the objects
        console.log(input.input)
        let distinctTypeWithTypeCountQuery = distinctTypes.map(type => {
            return {
                _userItemId: iaf_ext_files_coll._id,
                query: {
                    "fileAttributes.drawingDiscipline": Object.values(input.input)[0],
                    "fileAttributes.drawingSubType": type,
                    "fileAttributes.trackedDrawing": "Yes"
                },
                options: { page: { _pageSize: 0, getPageInfo: true } }
            }
        })
        console.log(distinctTypeWithTypeCountQuery, Object.values(input.input)[0], "distinctTypeWithTypeCountQuery")
        console.log('distinctTypes', distinctTypes)

        let typesPageInfo = await PlatformApi.IafScriptEngine.getItemsMulti(distinctTypeWithTypeCountQuery, ctx);
        console.log('typesPageInfo', typesPageInfo)

        let distinctTypesWithPageInfo = _.zip(distinctTypes, typesPageInfo)
        console.log('distinctTypesWithPageInfo', distinctTypesWithPageInfo)

        let distinctTypesWithChildrenCount = distinctTypesWithPageInfo.map(typeWithpage => {
            return {
                name: typeWithpage[0] == "" ? "Unknown" : typeWithpage[0],
                childCount: typeWithpage[1]._total
            }
        })
        console.log('distinctTypesWithChildrenCount', distinctTypesWithChildrenCount)
        return distinctTypesWithChildrenCount
    }
}
export default files
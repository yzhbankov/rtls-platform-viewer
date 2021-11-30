import { useLocations, useSublocations } from '../../../hooks'


export function useLocationSublocationData() {
     const locations = useLocations();
     const sublocations = useSublocations();

     const combineData = () => {
          if (!locations.loadAll.data || !sublocations.loadAll.data) return [];

          return sublocations.loadAll.data.sublocations.map(sublocation => {
               const location = locations.loadAll.data.locations.find(loc => loc.uid === sublocation.location_uid);
               return { ...sublocation, locationName: location && location.name }
          });
     }

     return {
          data: combineData(),
          isError: locations.loadAll.isError || sublocations.loadAll.isError,
          isLoading: locations.loadAll.isLoading || sublocations.loadAll.isLoading,
     }
}

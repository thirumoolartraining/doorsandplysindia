import React from 'react';
import { Filter, Grid, List, Globe } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';

interface ProductsHeaderProps {
  totalProducts: number;
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  onFilterClick?: () => void;
}

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({ 
  totalProducts, 
  viewMode = 'grid',
  onViewModeChange,
  onFilterClick
}) => {
  return (
    <Container size="7xl" padding="md" className="mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4B3A2A] mb-4 tracking-tight leading-tight">
            Premium UPVC Doors
          </h1>
          <p className="text-xl text-[#4B3A2A]/70 font-medium">
            Showing {totalProducts} export-ready UPVC door solutions
          </p>
          <p className="text-sm text-[#C3A572] font-semibold mt-2 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Available for international export
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl p-1.5 shadow-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              onClick={() => onViewModeChange?.('grid')}
              className="p-2.5 text-sm rounded-lg"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              onClick={() => onViewModeChange?.('list')}
              className="p-2.5 text-sm rounded-lg"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            onClick={onFilterClick}
            className="gap-2 bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg hover:bg-white/60 transition-all duration-300"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>
    </Container>
  );
};
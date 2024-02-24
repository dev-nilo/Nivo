import { Plus, Search, FileDown, MoreHorizontal } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Control } from './components/ui/input'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './components/ui/table'
import { Pagination } from './components/pagination'

export function App() {
  return (
    <div className='py-10 space-y-8 m-8'>
      <div>
        <Header />
        <Tabs />
      </div>

      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant='primary'>
            <Plus className='size-3' /> 
            Create New
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <Input variant='filter'>
            <Search className='size-3' />
            <Control placeholder='Search tags...' />
          </Input>

          <Button>
            <FileDown className='size-3' />
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">React</span>
                      <span className="text-xs text-zinc-500">76c58bb3-9611-4c5f-95df-153f57474ddd</span>
                    </div>
                  </TableCell>
                  <TableCell className='text-zinc-300'>
                    13 vídeo(s)
                  </TableCell>
                  <TableCell className='text-right'>
                  <Button>
                    <MoreHorizontal className='size-3' />
                  </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <Pagination />
      </main>
    </div>
  )
}